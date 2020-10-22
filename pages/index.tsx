import styled from "styled-components";
import { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";
import Button from "../components/Button";
import HomePageContent from "../components/homePageContent";
import HomeFooter from "../components/homeFooter";
import Footer from "../components/footer";
import { device } from "../consts/theme";

export default function Home() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <Layout wide={true}>
      <SEO />
      <Hero>
        <Up>
          <LeftSection>
            <H1>
              {`The #1 Place to Learn How to `}{" "}
              <H1Accent>{`Make Money Online`}</H1Accent>
            </H1>

            <Description>{`felan tozihat`}</Description>
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

            <Pic src={"/ArticlesPageImg.png"} alt={"Featured image"} />
          </RightSection>
        </Up>
        <End>
          <Button
            to="/"
            title="Sign Up Now"
            childStyle={{ padding: "15px", fontSize: "80%" }}
          />
          <EndLine />
          <EndH3>{`Master Your Life And Your Money`}</EndH3>
        </End>
      </Hero>
      <HomePageContent />
      <HomeFooter />
      <Footer />
    </Layout>
  );
}

const Hero = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 48px;
  line-height: 48px;
  margin: 0 0 5px;
  font-weight: 900;
`;
const H1Accent = styled.span`
  color: var(--primary-color-dark);
`;
const Up = styled.div`
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
  @media (max-width: 620px) {
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: center;
  }
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
const End = styled.div`
  display: flex;
  padding: 0 5rem;
  justify-content: stretch;
  align-items: flex-end;
`;
const EndLine = styled.div`
  width: 8rem;
  border-bottom: 1px solid var(--input-focus-border);
  flex-grow: 1;
  margin: 0 3rem;
  @media ${device.tablet} {
    display: none;
  }
`;
const EndH3 = styled.h3`
  margin-bottom: -0.8rem;
  font-size: 1.5vw;
  color: var(--secondary-color-light);
  @media ${device.laptop} {
    font-size: 1.2vw;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const BlackSection = styled.div`
  width: 100%;
  height: inherit;
  background-color: black;
  @media (max-width: 456px) {
    display: none;
  }
`;
const Pic = styled.img`
  margin-top: -40%;
  margin-right: 81%;
  width: 61%;
  @media ${device.laptop} {
    margin-top: -40%;
    margin-right: 62%;
    width: 76%;
  }
  @media ${device.tablet} {
    margin-top: -6%;
    margin-right: 3rem;
    width: 4rem;
  }
  @media (max-width: 456px) {
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
