import { GetServerSideProps } from "next";
import { fetchPosts, Posts_posts as Posts } from "../wpapi";
import { ArticlesView } from "../perPageComponenta/Articles/View";
import Error from "next/error";

interface Props {
  posts?: Posts | null;
}

const POST_PER_PAGE = 5;

export default function Articles({ posts }: Props) {
  if (!posts?.nodes) {
    return <Error statusCode={404} />;
  }

  return <ArticlesView posts={posts.nodes} />;
}

export const getStaticProps: GetServerSideProps<Props> = async (context) => {
  // const page = parseInt((context.params?.page || "1").toString(), 10) || 1;

  const [{ data }] = [
    await fetchPosts({ variables: { first: POST_PER_PAGE } }),
  ];

  return {
    props: {
      posts: data?.data.posts,
    },
  };
};
