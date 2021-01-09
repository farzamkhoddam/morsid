import PostCard from "../../components/post-card";
import styled from "styled-components";
import { device } from "../../consts/theme";
import { Posts_posts_nodes } from "../../wpapi";

interface Props {
  posts: (Posts_posts_nodes | null)[];
}

const BlogList = ({ posts }: Props) => {
  return (
    <Section className={`home-posts`}>
      <ArticlesContainer>
        {posts.map((post) =>
          post ? <PostCard key={post.id} {...post} /> : null,
        )}
      </ArticlesContainer>
    </Section>
  );
};
export default BlogList;

const Section = styled.section`
  margin-top: 80px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 4rem;
  padding-bottom: 100px;
  @media ${device.tablet} {
    align-items: center;
    padding-left: 0;
  }
`;
const ArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
  width: 100%;
`;
const H2 = styled.h2`
  margin-left: 1rem;
  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;
