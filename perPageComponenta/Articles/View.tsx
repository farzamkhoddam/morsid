import SEO from "../../components/seo";

import BlogList from "../../components/blogList";
import { device } from "../../consts/theme";
import styled from "styled-components";

import { Posts_posts_nodes } from "../../wpapi";
import Header from "../../components/header";
import Menu from "../../components/menu";

interface Props {
  firstPost: Posts_posts_nodes;
  restPosts: Posts_posts_nodes[];
}
export const ArticlesView: React.FC<Props> = (props) => {
  return (
    <>
      <SEO />
      <Hero>
        <LeftSection>
          <LeftSideHeaderContainer>
            <Header />
            <TabletMenu />
          </LeftSideHeaderContainer>

          <Title className="title">{`Start Learning Skills`}</Title>
          <Title className="title">
            {` to Make `}
            <HilightDesc>{`$$$`}</HilightDesc>
          </Title>
          <Description>
            {`Itachi Uchiha  is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. Itachi is the older brother of Sasuke Uchiha and is responsible for killing all the members of their clan, sparing only his younger brother Sasuke.`}
          </Description>
        </LeftSection>
        <RightSection>
          <Menu />
          <BlackSection />
          <PicContainer>
            <BlackNavar>
              <Pic src={"/Lamp.png"} alt={"Fe`atured image"} />
            </BlackNavar>
          </PicContainer>
        </RightSection>
      </Hero>
      <BlogList {...props} />
    </>
  );
};

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100vw;
  width: 100%;
  height: auto;
  margin-bottom: 3rem;

  .tagline {
    font-size: 24px;
    margin-top: 0;
    margin-top: 2px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
const LeftSideHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  @media ${device.tablet} {
    margin-bottom: 3rem;
  }
`;
const TabletMenu = styled(Menu)`
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;
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

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-basis: 60%;
  flex-grow: 1;
  height: inherit;
  max-width: 100vw;
`;
const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-left: 5rem;
  padding-right: 12rem;
  @media ${device.laptop} {
    padding-right: 6rem;
  }
  @media ${device.tablet} {
    padding-right: 3rem;
  }
`;
const HilightDesc = styled.span`
  color: var(--primary-color-dark);
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-enf;
  flex-basis: 40%;
  width: 100%;
  height: inherit;
  min-height: var(--header-height-desktop);

  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobileL} {
    max-height: 50%;
    align-items: flex-end;
  }
`;
const BlackSection = styled.div`
  width: 100%;
  height: 10rem;
  background-color: black;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;
const PicContainer = styled.div`
  font-size: larger;
`;
const BlackNavar = styled.div`
  background-color: black;
  width: 100%;
  height: 9em;
  position: relative;
`;
const Pic = styled.img`
  position: absolute;
  top: 0;
  width: 8em;
  left: 1em;
  @media ${device.laptop} {
    width: 6rem;
    top: 3em;
  }
  @media ${device.tablet} {
    margin-top: -6%;
    margin-right: 3rem;
    width: 2rem;
    min-width: unset;
  }
  @media ${device.mobileL} {
    display: none;
  }
`;
