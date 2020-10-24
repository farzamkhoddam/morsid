import { GetStaticProps } from "next";
import { fetchPosts, Posts_posts as Posts, Posts_posts_nodes } from "../wpapi";
import { ArticlesView } from "../perPageComponenta/Articles/View";

interface Props {
  posts: Posts;
}

export default function Articles({ posts }: Props) {
  const firstPost: Posts_posts_nodes = posts?.nodes[0];

  //TODO: add more Article in WP and uncomment in section
  // const restPosts: Posts_posts_nodes[] = posts?.nodes.splice(
  //   1,
  //   posts?.nodes.length,
  // );
  //TODO: add more Article in WP and remove in section
  const restPosts: Posts_posts_nodes[] = [];
  for (let index = 0; index < 12; index++) {
    restPosts.push(firstPost);
  }

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
