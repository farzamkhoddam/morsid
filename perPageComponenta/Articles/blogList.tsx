import PostCard from "../../components/post-card";
import styled from "styled-components";
import FirstArticle from "../../components/first-Article";
import { device } from "../../consts/theme";
import { Posts_posts_nodes } from "../../wpapi";

interface Props {
  firstPost: Posts_posts_nodes;
  restPosts: Posts_posts_nodes[];
}

const BlogList: React.FC<Props> = ({ firstPost, restPosts }) => {
  return (
    <Section className={`home-posts `}>
      <H2>Featured Article</H2>
      <FirstArticle {...firstPost} />
      <ArticlesContainer>
        {restPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </ArticlesContainer>
      {/* <Link href="/blog">
        <div className="button">
          See more
          <span className="icon -right">
            <RiArrowRightSLine />
          </span>
        </div>
      </Link> */}
    </Section>
  );
};
export default BlogList;

const Section = styled.section`
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
`;
const H2 = styled.h2`
  margin-left: 1rem;
  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;
