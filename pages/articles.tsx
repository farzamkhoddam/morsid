import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { fetchPosts, Posts_posts as Posts } from "../wpapi";

interface Props {
  posts: Posts;
}

export default function Articles({ posts }: Props) {
  return (
    <>
      <Head>
        <title>{"Articles Page Title"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {posts.nodes.map(({ id, title, slug }) => (
          <div key={id}>
            <Link href={`/article/${slug}`}>
              <a>{title}</a>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [
    {
      data: {
        data: { posts },
      },
    },
  ] = [await fetchPosts({ variables: { first: 10 } })];

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
