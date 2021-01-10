import SEO from "../../components/seo";
import styled from "styled-components";
import BlogList from "./blogList";
import { Posts_posts as PostsPage } from "../../wpapi";
import Menu from "../../components/menu";
import Button from "../../components/Button";

interface Props {
  pages: PostsPage[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const ArticlesView = ({
  pages,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: Props) => {
  return (
    <div className="page">
      <SEO />
      <Menu />
      {pages.map((page) => (
        <BlogList key={page.pageInfo?.startCursor} posts={page.nodes || []} />
      ))}
      <LoadMoreButton>
        {hasNextPage ? (
          <Button
            title={isFetchingNextPage ? "Loading..." : "Load More"}
            clickHandler={fetchNextPage}
          />
        ) : null}
      </LoadMoreButton>
    </div>
  );
};

const LoadMoreButton = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 300px;
`;
