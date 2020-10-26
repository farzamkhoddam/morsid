import { GetStaticProps } from "next";
import { fetchPosts, Posts_posts as Posts, Posts_posts_nodes } from "../wpapi";
import { ArticlesView } from "../perPageComponenta/Articles/View";

interface Props {
  posts: Posts;
}

export default function Articles({ posts }: Props) {
  const firstPost: Posts_posts_nodes = posts?.nodes[0];
  const restPosts: Posts_posts_nodes[] = posts?.nodes.splice(
    1,
    posts?.nodes.length,
  );

  return <ArticlesView firstPost={firstPost} restPosts={restPosts} />;
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

{
  /* <main>
{posts.nodes.map(({ id, title, slug }) => (
  <div key={id}>
    <Link href={`/article/${slug}`}>
      <a>{title}</a>
    </Link>
  </div>
))}
</main> */
}
