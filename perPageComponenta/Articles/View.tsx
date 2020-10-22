import Layout from "../../components/layout";

import SEO from "../../components/seo";

import Link from "next/link";

import { RiArrowRightSLine } from "react-icons/ri";

import Navigation from "../../components/navigation";
import BlogListHome from "../../components/blog-list";
import { device } from "../../consts/theme";
import styled from "styled-components";
import { useState } from "react";
import { Posts_posts_nodes } from "../../wpapi";

interface Props {
  firstPost: Posts_posts_nodes;
  restPosts: Posts_posts_nodes[];
}
export const ArticlesView: React.FC<Props> = (props) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <Layout wide={true}>
      <SEO />
      <Hero>
        <LeftSection>
          <h1 className="title">
            {`Start Learning Skills to Make`}
            <span>{`$$$`}</span>
          </h1>
          <Description>
            {`Itachi Uchiha  is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. Itachi is the older brother of Sasuke Uchiha and is responsible for killing all the members of their clan, sparing only his younger brother Sasuke.`}
          </Description>

          <Link href={"/signup"}>
            <div className="button">
              <span className="icon -right">
                <RiArrowRightSLine />
              </span>
            </div>
          </Link>
        </LeftSection>
        <RightSection>
          {!isActiveMenu ? (
            <DeactiveMenuNavContainer>
              <Navigation
                setIsActiveMenu={setIsActiveMenu}
                isActiveMenu={isActiveMenu}
              />
            </DeactiveMenuNavContainer>
          ) : (
            <ActiveMenuNavContainer>
              <Navigation
                setIsActiveMenu={setIsActiveMenu}
                isActiveMenu={isActiveMenu}
              />
            </ActiveMenuNavContainer>
          )}

          <BlackSection />

          <Pic src={"/Lamp.png"} alt={"Featured image"} />
        </RightSection>
      </Hero>
      <BlogListHome {...props} />
    </Layout>
  );
};

const Hero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100vw;
  width: 100%;
  width: 100%;
  height: 50vh;
  margin-bottom: 3rem;

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
  .title {
    font-size: 48px;
    line-height: 48px;
    margin: 0 0 5px;
    font-weight: 900;
  }
  .tagline {
    font-size: 24px;
    margin-top: 0;
    margin-top: 2px;
    color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: $breakpoint-md) {
    padding-top: 30px;
    > div:nth-child(1) {
      padding-bottom: 30px;
    }
  }
`;
const LeftSection = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 5rem;
  padding-right: 7rem;
`;
const Description = styled.div`
  p {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
const RightSection = styled.div`
  height: 100%;
  max-width: 30rem;
  width: -webkit-fill-available;
  margin-top: -3rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  @media ${device.tablet} {
    max-width: 100vw;
    align-items: flex-end;
  }
  @media ${device.mobileL} {
    max-height: 50%;
    align-items: flex-end;
  }
`;
const BlackSection = styled.div`
  width: 100%;
  height: inherit;
  background-color: black;
  @media ${device.mobileL} {
    display: none;
  }
`;
const Pic = styled.img`
  margin-top: -44%;
  margin-right: 39%;
  width: 50%;
  max-width: 30%;
  min-width: 40%;
  @media ${device.tablet} {
    margin-top: -10%;
    margin-right: 3rem;
    width: 4rem;
    min-width: unset;
  }
  @media ${device.mobileL} {
    display: none;
  }
`;
const DeactiveMenuNavContainer = styled.div`
  height: 3rem;
  background: black !important;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  z-index: 2;
`;
const ActiveMenuNavContainer = styled.div`
  height: 3rem;
  background: var(--secondary-color-dark);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
`;
