import { useState } from "react";
import { GetStaticProps } from "next";
import { fetchPosts, Posts_posts as PostsPage } from "../wpapi";
import styled from "styled-components";
import SEO from "../components/seo";
import { device } from "../consts/theme";
import Image from "next/image";
import React from "react";
import Menu from "components/menu";
import Button from "components/Button";
import Footer from "components/footer";
import HomeCarousel from "perPageComponenta/Home/homeCarousel";

interface Props {
  posts: PostsPage;
}

export default function Home({ posts }: Props) {
  const [carouselValue, setCarouselValue] = useState(0);

  return (
    <div style={{ position: "relative" }}>
      <SEO />
      <Menu />
      <Header>
        <InnerSection>
          <TitleAndButton>
            <Title>MASTER THE ART OF ENGINEERING SIDE INCOME</Title>
            <SignUpButton title="SIGN UP NOW" viewType="glow" to="/signup" />
          </TitleAndButton>

          <ImageContainer>
            <Image
              src="/home-header.jpg"
              width={686}
              height={465}
              layout="responsive"
              priority={true}
            />
          </ImageContainer>
        </InnerSection>
      </Header>
      <Latest>
        <LatestHeader>
          <SectionTitle>LEARN HOW TO ENGINEER EXTRA INCOME</SectionTitle>
          <ArrowsContainer>
            <ArrowButton onClick={() => setCarouselValue((o) => o - 1)}>
              <Image
                src="/tiny-arrow-left.svg"
                alt="left"
                width={24}
                height={24}
              />
            </ArrowButton>
            <ArrowButton onClick={() => setCarouselValue((o) => o + 1)}>
              <Image
                src="/tiny-arrow-right.svg"
                alt="left"
                width={24}
                height={24}
              />
            </ArrowButton>
          </ArrowsContainer>
        </LatestHeader>
        <HomeCarousel
          posts={posts}
          value={carouselValue}
          onChange={(value) => setCarouselValue(value)}
        />
      </Latest>
      <WhyUs>
        <SectionTitle>
          LEVEL UP YOUR SKILL WITH OUR HUSTLE ADVISORS
        </SectionTitle>
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
            <H3>ONLINE AD AGENCIES</H3>
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await fetchPosts({ variables: { first: 8 } })).data?.data
    .posts;

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};

const Header = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 38rem;
  background: var(--primary-color-normal);

  @media (max-width: 1260px) {
    height: 30rem;
  }
  @media ${device.laptop} {
    height: 26.5rem;
  }
  @media (max-width: 950px) {
    height: 20rem;
  }
  @media ${device.tablet} {
    height: 14rem;
  }
  @media ${device.mobileL} {
    height: 24rem;
  }
  @media ${device.mobileM} {
    height: 22rem;
  }
`;
const ImageContainer = styled.div`
  width: 60%;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  @media ${device.mobileL} {
    position: relative;
    width: 100%;
    margin-top: 2rem;
  }
`;
const InnerSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: var(--page-max-width);
  margin: 0 2rem;
  margin-top: 5rem;
  height: 29rem;
  position: relative;
  @media (max-width: 1260px) {
    height: 28rem;
  }
  @media ${device.laptop} {
    height: 20rem;
  }
  @media (max-width: 950px) {
    height: 17.3rem;
  }
  @media ${device.tablet} {
    height: 6.5rem;
    margin-top: 0;
  }
  @media ${device.mobileL} {
    flex-wrap: wrap;
  }
`;
const TitleAndButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  @media ${device.mobileL} {
    width: 100%;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 97px;
  line-height: 109px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 8rem;

  @media (max-width: 1260px) {
    font-size: 77px;
    line-height: 89px;
    margin-bottom: 4rem;
  }

  @media ${device.laptop} {
    font-size: 62px;
    line-height: 76px;
    margin-bottom: 4rem;
  }
  @media (max-width: 950px) {
    font-size: 37px;
    line-height: 49px;
    margin-bottom: 2rem;
  }
  @media ${device.tablet} {
    font-size: 33px;
    line-height: 39px;
    margin-bottom: 5.9rem;
    min-height: 6.5rem;
  }
  @media ${device.mobileL} {
    text-align: center;
    margin-bottom: 0rem;
  }
`;
const SignUpButton = styled(Button)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  width: 358px;
  height: 88px;
  @media ${device.laptop} {
    width: 238px;
    height: 68px;
  }
  @media ${device.tablet} {
    font-size: 13px;
    line-height: 12px;
    width: 147px;
    height: 48px;
  }
`;
const Latest = styled.section`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: var(--page-max-width);
  margin-right: auto;
  margin-left: auto;
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
    font-size: 40px;
    line-height: 48px;
  }
`;
const ArrowsContainer = styled.div`
  display: flex;
`;
const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const WhyUs = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: var(--page-max-width);
  margin-right: auto;
  margin-left: auto;
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;
const Icon1Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  @media ${device.tablet} {
    width: 49%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--accent-color-normal);
  padding: 0.5rem;
  box-shadow: -10px 10px #dbbd82;
  margin: 1rem;
  width: 7.5rem;
  height: 7.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  text-transform: capitalize;
`;
const H3 = styled.h3`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  text-transform: capitalize;
  color: #1d3330;
`;
