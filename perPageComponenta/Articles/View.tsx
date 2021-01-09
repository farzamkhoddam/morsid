import SEO from "../../components/seo";

import BlogList from "./blogList";
import { Posts_posts_nodes } from "../../wpapi";
import Menu from "../../components/menu";

interface Props {
  posts: (Posts_posts_nodes | null)[];
}

export const ArticlesView = ({ posts }: Props) => {
  return (
    <div className="page">
      <SEO />
      <Menu />
      <BlogList posts={posts} />
    </div>
  );
};
