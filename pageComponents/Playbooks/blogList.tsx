import PostCard from "../../components/post-card";
import styled from "styled-components";
import { device } from "../../consts/theme";
import { Posts_posts_nodes as Post } from "../../wpapi";

interface Props {
  posts: (Post | null)[];
}

const BlogList = ({ posts }: Props) => {
  return (
    <Section className={`home-posts`}>
      <PlaybooksContainer>
        {posts.map((post) =>
          post ? <PostCard key={post.id} post={post} /> : null,
        )}
      </PlaybooksContainer>
    </Section>
  );
};
export default BlogList;

const Section = styled.section`
  display: flex;

  @media (max-width: 700px) {
    align-items: center;
    padding-left: 0;
  }
`;
const PlaybooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  gap: 36px;
  width: 100%;
  max-width: var(--page-max-width);
  margin: 0 auto;
  padding: 0 16px;
  @media ${device.laptopXS} {
    grid-template-columns: repeat(2, auto);
    gap: 24px;
  }
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;
