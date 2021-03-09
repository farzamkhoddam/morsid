import { GetStaticProps } from "next";
import { fetchPosts, Posts_posts as PostsPage } from "../wpapi";
import { PlaybooksView } from "../pageComponents/Playbooks/View";
import { QueryClient, useInfiniteQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import axios from "axios";

const POST_PER_PAGE = 6;

export default function Playbooks() {
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
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery("posts", async () => {
    return (await fetchPosts({ variables: { first: POST_PER_PAGE } })).data
      ?.data.posts;
  });

  return {
    props: {
      // see https://github.com/tannerlinsley/react-query/issues/1458#issuecomment-747716357
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 20,
  };
};
