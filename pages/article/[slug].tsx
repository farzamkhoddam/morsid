import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { fetchPost, Post_post as Post, PostIdType } from "../../wpapi";

interface Props {
  post: Post;
}

export default function Articles({ post }: Props) {
  const { title, content } = post;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug },
}) => {
  const [
    {
      data: {
        data: { post },
      },
    },
  ] = [
    await fetchPost({
      variables: { id: slug.toString(), idType: PostIdType.SLUG },
    }),
  ];

  return {
    props: {
      post,
    },
  };
};
