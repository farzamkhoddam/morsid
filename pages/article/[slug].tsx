import { GetServerSideProps } from "next";

import { fetchPost, Post_post as Post, PostIdType } from "../../wpapi";
import { ArticleView } from "../../perPageComponenta/Article/View";

interface Props {
  post: Post;
}

export default function Articles({ post }: Props) {
  return <ArticleView post={post} />;
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
