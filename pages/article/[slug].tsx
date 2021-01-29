import { GetServerSideProps } from "next";
import { fetchPost, Post, PostIdType } from "../../wpapi";
import { ArticleView } from "../../pageComponente/Article/View";
import { getTokenCookie } from "utils/auth-cookie";
import Error from "next/error";

interface Props {
  post?: Post | null;
}

export default function Articles({ post }: Props) {
  if (!post || !post.post) {
    return <Error statusCode={404} />;
  }

  return <ArticleView post={post} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  query: { slug },
}) => {
  const token = getTokenCookie(req);

  const [{ data }] = [
    await fetchPost({
      variables: { id: (slug || "").toString(), idType: PostIdType.SLUG },
      clientConfig: token
        ? () => ({ headers: { Authorization: `Bearer ${token}` } })
        : undefined,
    }),
  ];

  return {
    props: {
      post: data?.data || null,
    },
  };
};
