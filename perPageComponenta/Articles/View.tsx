import SEO from "../../components/seo";

import BlogList from "./blogList";
import { Posts_posts as Posts } from "../../wpapi";
import Menu from "../../components/menu";

interface Props {
  posts: Posts;
}

export const ArticlesView = ({ posts }: Props) => {
  return (
    <div className="page">
      <SEO />
      <Menu />
      <BlogList posts={posts.nodes || []} />
    </div>
  );
};
