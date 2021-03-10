import { GetServerSideProps, GetStaticProps } from "next";
import { fetchPosts, fetchViwer, Posts_posts as PostsPage } from "../wpapi";
import { PlaybooksView } from "../pageComponents/Playbooks/View";
import { QueryClient, useInfiniteQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import axios from "axios";
import { getTokenCookie } from "utils/auth-cookie";
import { Viewer_viewer as User } from "wpapi";

const POST_PER_PAGE = 6;
interface Props {
  user: User;
}
export default function Playbooks({ user }: Props) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<PostsPage>(
    "posts",
    async ({ pageParam }) => {
      const query = new URLSearchParams({
        first: POST_PER_PAGE.toString(),
      });
      if (pageParam) {
        query.set("after", pageParam);
      }
      return (await axios.get(`/api/posts?${query.toString()}`)).data.data
        .posts;
    },
    {
      staleTime: Infinity,
      getNextPageParam: ({ pageInfo }) => {
        return pageInfo?.hasNextPage && pageInfo.endCursor;
      },
    },
  );

  return (
    <PlaybooksView
      hasNextPage={!!hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      pages={data?.pages || []}
      user={user}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = getTokenCookie(req);
  let user: User | null | undefined = null;
  if (token) {
    const [{ data }] = [
      await fetchViwer({
        clientConfig: () => ({ headers: { Authorization: `Bearer ${token}` } }),
      }),
    ];
    user = data?.data?.viewer;
  }

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery("posts", async () => {
    return (
      await fetchPosts({
        variables: { first: POST_PER_PAGE },
        // clientConfig: () => ({ headers: { Authorization: `Bearer ${token}` } }),
      })
    ).data?.data.posts;
  });

  return {
    props: {
      user: user as User,
      // see https://github.com/tannerlinsley/react-query/issues/1458#issuecomment-747716357
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    // revalidate: 20,
  };
};
