import SEO from "../../components/seo";

import BlogList from "../../components/blogList";
import styled from "styled-components";
import { Posts_posts_nodes } from "../../wpapi";
import Hero from "../../components/Hero";
import { device } from "../../consts/theme";

interface Props {
  firstPost: Posts_posts_nodes;
  restPosts: Posts_posts_nodes[];
}
export const ArticlesView: React.FC<Props> = (props) => {
  return (
    <>
      <SEO />
      <Hero
        upTitle={<UpTitle className="title">{`Start Learning Skills`}</UpTitle>}
        downTitle={
          <Title className="title">
            {` to Make `}
            <HighlightDesc>{`$$$`}</HighlightDesc>
          </Title>
        }
        description={`Itachi Uchiha  is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. Itachi is the older brother of Sasuke Uchiha and is responsible for killing all the members of their clan, sparing only his younger brother Sasuke.`}
        pic={<Pic src="/Lamp.png" alt="Featured image" />}
      />
      <BlogList {...props} />
    </>
  );
};
const Title = styled.h1`
  line-height: 48px;
  margin: 0 0 5px;
  font-weight: 900;
  margin-left: 5rem;
  padding-right: 12rem;
  font-size: 3.5vw;
  line-height: 100%;
  margin-bottom: 0;
  @media ${device.laptop} {
    font-size: 3vw;
    padding-right: 6rem;
  }
  @media ${device.tablet} {
    font-size: xx-large;
    padding-right: 0rem;
  }
`;
const UpTitle = styled(Title)`
  margin-top: 3rem;
`;
const HighlightDesc = styled.span`
  color: var(--primary-color-dark);
`;
const Pic = styled.img`
  position: absolute;
  top: 1rem;
  width: 8em;
  left: 2em;

  @media ${device.laptop} {
    width: 9rem;
    top: 2em;
  }
`;
