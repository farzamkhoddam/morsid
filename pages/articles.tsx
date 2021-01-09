import { GetStaticProps } from "next";
import { fetchPosts, Posts_posts as Posts } from "../wpapi";
import { ArticlesView } from "../perPageComponenta/Articles/View";
import Error from "next/error";

interface Props {
  posts?: Posts | null;
}

export default function Articles({ posts }: Props) {
  if (!posts?.nodes) {
    return <Error statusCode={404} />;
  }
  const allPosts = [...posts?.nodes];
  const firstPost = allPosts.shift();

  return <ArticlesView firstPost={firstPost} restPosts={allPosts || []} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [{ data }] = [await fetchPosts({ variables: { first: 10 } })];

  return {
    props: {
      posts: data?.data.posts,
    },
    revalidate: 20,
  };
};
