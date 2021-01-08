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
        <TitleAndButton>
          <Title>LEARN HOW TO MAKE MONEY ONLINE</Title>
          <Button title="SIGN UP NOW" type="glow" />
        </TitleAndButton>

        <LogoContainer>
          <Image src="/home-header.jpg" alt="header" width={440} height={295} />
        </LogoContainer>
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
        <CardsContainer>
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
          <CardItem
            slug="slugggggggggggg"
            title="Email Marketing Play Book"
            excerpt="This article is about email marketing for marketers"
          />
        </CardsContainer>
      </Latest>
      <WhyUs>
        <SectionTitle>LEVEL UP YOUR SKILL WITH OUR COACH</SectionTitle>
        <IconsContainer>
          <Icon>
            <Image
              src="/digital-marketing.svg"
              alt="digital-marketing"
              width={60}
              height={60}
            />
          </Icon>
          <Icon>
            <Image
              src="/presentation.svg"
              alt="presentation"
              width={60}
              height={60}
            />
          </Icon>
          <Icon>
            <Image
              src="/new-email.svg"
              alt="new-email"
              width={60}
              height={60}
            />
          </Icon>
          <Icon>
            <Image
              src="/mobile-phone.svg"
              alt="mobile-phone"
              width={60}
              height={60}
            />
          </Icon>
        </IconsContainer>
      </WhyUs>
      <Footer />
    </div>
  );
}
const Header = styled.section`
  width: 100%;
  height: 10rem;
  background: var(--primary-color-normal);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: auto;
`;
const LogoContainer = styled.div`
  width: auto;
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
  font-size: 82px;
  line-height: 98px;
  text-transform: uppercase;

  @media ${device.laptop} {
    font-size: 3vw;
    padding-right: 6rem;
  }
  @media ${device.tablet} {
    font-size: xx-large;
    padding-right: 0rem;
  }
`;
const Latest = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
  height: auto;
  max-width: var(--page-max-width);
  background-color: red;
`;
const LatestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const SectionTitle = styled.h2`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 67px;
  text-transform: capitalize;
`;
const ArrowsContainer = styled.div`
  display: flex;
`;
const CardsContainer = styled.div`
  display: flex;
`;
const CardItem = styled(PostCard)`
  width: 30%;
`;
const SignUPButton = styled(Button)`
  background: radial-gradient(
    100% 1655.01% at 0% 6.25%,
    #d49844 0%,
    #fee7b1 35.61%,
    #fee6af 67.08%,
    #f6c757 100%
  );
`;
const WhyUs = styled.section`
  margin-top: 3rem;
  width: 100%;
`;
const IconsContainer = styled.div`
  display: flex;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--accent-color-normal);
  padding: 0.5rem;
  box-shadow: -5px 10px red;
  margin: 1rem;
`;
