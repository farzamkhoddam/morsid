import styled from "styled-components";
import SEO from "../components/seo";
import { device } from "../consts/theme";
import Image from "next/image";
import React from "react";
import Menu from "components/menu";
import Button from "components/Button";
import PostCard from "components/post-card";
import Footer from "components/footer";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <SEO />
      <Menu />
      <Header>
        <InnerSection>
          <TitleAndButton>
            <Title>LEARN HOW TO MAKE MONEY ONLINE</Title>
            <SignUpButton title="SIGN UP NOW" type="glow" />
          </TitleAndButton>

          <ImageContainer>
            <Image
              src="/home-header.jpg"
              alt="header"
              layout="fill"
              // objectFit="none"
              quality={100}
            />
          </ImageContainer>
        </InnerSection>
      </Header>
      <Latest>
        <LatestHeader>
          <SectionTitle>Latest</SectionTitle>
          <ArrowsContainer>
            <Image
              src="/tiny-arrow-left.svg"
              alt="left"
              width={24}
              height={24}
            />
            <Image
              src="/tiny-arrow-right.svg"
              alt="left"
              width={24}
              height={24}
            />
          </ArrowsContainer>
        </LatestHeader>
        {/* <CardsContainer>
          
          <CardItem
            slug="slugggggggggggg"
            title="Email Marketing Play Book"
            excerpt="This article is about email marketing for marketers"
          />
          

          <CardItem
            slug="slugggggggggggg"
            title="Email Marketing Play Book"
            excerpt="This article is about email marketing for marketers"
          />
          

          <SmartCardItem
            slug="slugggggggggggg"
            title="Email Marketing Play Book"
            excerpt="This article is about email marketing for marketers"
          />
        </CardsContainer> */}
      </Latest>
      <WhyUs>
        <SectionTitle>LEVEL UP YOUR SKILL WITH OUR COACH</SectionTitle>
        <IconsContainer>
          <Icon1Container>
            <Icon>
              <Image
                src="/digital-marketing.svg"
                alt="digital-marketing"
                width={60}
                height={60}
              />
            </Icon>
            <H3>FASEBOOK ADS</H3>
          </Icon1Container>
          <Icon1Container>
            <Icon>
              <Image
                src="/presentation.svg"
                alt="presentation"
                width={60}
                height={60}
              />
            </Icon>
            <H3>EMAIL MARKETING</H3>
          </Icon1Container>
          <Icon1Container>
            <Icon>
              <Image
                src="/new-email.svg"
                alt="new-email"
                width={60}
                height={60}
              />
            </Icon>
            <H3>MARKETING AGENCIES</H3>
          </Icon1Container>
          <Icon1Container>
            <Icon>
              <Image
                src="/mobile-phone.svg"
                alt="mobile-phone"
                width={60}
                height={60}
              />
            </Icon>
            <H3>Dropshopping & Ecommerce</H3>
          </Icon1Container>
        </IconsContainer>
      </WhyUs>
      <Footer />
    </div>
  );
}
const Header = styled.section`
  width: 100%;
  height: 100%;
  background: var(--primary-color-normal);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  width: 70%;
  margin-bottom: -3rem;
`;
const InnerSection = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--page-max-width);
  margin: 0 1rem;
`;
const TitleAndButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const Title = styled.h1`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  color: #ffffff;

  @media ${device.laptop} {
    font-size: 3vw;
    padding-right: 6rem;
  }
  @media ${device.tablet} {
    font-size: xx-large;
    padding-right: 0rem;
  }
`;
const SignUpButton = styled(Button)`
  width: 70%;
  margin-bottom: -3rem;
`;
const Latest = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
  height: auto;
  max-width: var(--page-max-width);
  // background-color: red;
`;
const LatestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  max-width: var(--page-max-width);
`;
const SectionTitle = styled.h2`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 67px;
  text-transform: capitalize;
  margin-left: 1rem;
  @media ${device.tablet} {
    font-size: 28px;
  }
`;
const ArrowsContainer = styled.div`
  display: flex;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 1rem;
  max-width: var(--page-max-width);
  width: 100%;
  padding: 0 1rem;
  flex-wrap: wrap;
`;
const CardItem = styled(PostCard)`
  margin: 0 1rem;
`;
const SmartCardItem = styled(PostCard)`
  @media ${device.tablet} {
    display: none;
  }
`;

const WhyUs = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Icon1Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  @media ${device.tablet} {
    width: 49%;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--accent-color-normal);
  padding: 0.5rem;
  box-shadow: -5px 10px #dbbd82;
  margin: 1rem;
  width: 7.5rem;
  height: 7.5rem;
`;
const H3 = styled.h3`
  text-align: center;
`;
