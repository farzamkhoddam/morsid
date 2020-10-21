import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri";

import PostCard from "./post-card";
import styled from "styled-components";
import FirstArticle from "./first-Article";
import { device } from "../consts/theme";
import Link from "next/link";

const PostMaker = ({ data }) => {
  return (
    <Section className="home-posts">
      <H2>Featured Article</H2>
      <FirstArticle data={data[0].props.data} />
      <ArticlesContainer>{data.splice(1, data.length)}</ArticlesContainer>
      <Link href="/blog">
        <div className="button">
          See more
          <span className="icon -right">
            <RiArrowRightSLine />
          </span>
        </div>
      </Link>
    </Section>
  );
};
// export default function BlogListHome() {
//   return <PostCard key={edge.node.id} data={edge.node} />;

//   return <PostMaker data={posts} />;
// }
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
`;
