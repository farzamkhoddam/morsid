import { GetServerSideProps } from "next";
import { fetchPost, Post_post as Post, PostIdType } from "../../wpapi";
import { ArticleView } from "../../perPageComponenta/Article/View";
import { getTokenCookie } from "utils/auth-cookie";
import Error from "next/error";

interface Props {
  post: Post;
}

export default function Articles({ post }: Props) {
  if (!post) {
    return <Error statusCode={404} />;
  }

  return <ArticleView post={post} />;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query: { slug },
}) => {
  const token = getTokenCookie(req);

  const [
    {
      data: { data },
    },
  ] = [
    await fetchPost({
      variables: { id: slug.toString(), idType: PostIdType.SLUG },
      clientConfig: token
        ? () => ({ headers: { Authorization: `Bearer ${token}` } })
        : undefined,
    }),
  ];

  return {
    props: {
      post: data?.post || null,
    },
  };
};
