import { useState } from "react";
import { GetStaticProps } from "next";
import { fetchPosts, Posts_posts as PostsPage } from "../wpapi";
import styled from "styled-components";
import SEO from "../components/seo";
import { device } from "../consts/theme";
import Image from "next/image";
import React from "react";

import Button from "components/Button";
import Footer from "components/footer";
import HomeCarousel from "pageComponente/Home/homeCarousel";
import SmartCompBaseOnLogin from "components/smartCompBaseOnLogin";
import HomeMenu from "pageComponente/Home/menu";
import Link from "next/link";

interface Props {
  posts: PostsPage;
}

export default function Home({ posts }: Props) {
  const [carouselValue, setCarouselValue] = useState(0);

  return (
    <div style={{ position: "relative" }}>
      <SEO />
      <HomeMenu />
      <Header>
        <ImageContainer>
          <Image
            src="/home-header.jpg"
            width={686}
            height={465}
            layout="responsive"
            priority={true}
          />
        </ImageContainer>
        <InnerSection>
          <TitleAndButton>
            <Title>MASTER THE ART OF ENGINEERING SIDE INCOME</Title>
            {/* <SignUpButton title="SIGN UP NOW" viewType="glow" to="/signup" /> */}
            {typeof window && (
              <SmartCompBaseOnLogin
                doesNotLogin={
                  <SmartButton to="/signup" title="Sign Up" viewType="glow" />
                }
                loginWithoutSubscribed={
                  <SmartButton
                    to="/account"
                    title="Get Artciles"
                    viewType="glow"
                  />
                }
                loginWithSubscribed={
                  <SmartButton to="/articles" title="Read Artciles" />
                }
              />
            )}
          </TitleAndButton>
        </InnerSection>
      </Header>
      <Latest>
        <LatestHeader>
          <SectionTitle>The Shortest Path To Online Income</SectionTitle>
          <SectionSubtitle>
            {` Every 14 days, our team of analysts puts together a detailed,
            step-by-step playbook on proven side hustles that are generating
            real income in today's digital world. All you need to do is choose
            the side hustle that works with your lifestyle and take action on
            our detailed playbooks.`}
          </SectionSubtitle>

          {/* در طراحی قبلی، میتونستیم با این دکمه ها، اسلایدر رو حرکت بدیم. در طراحی جدید اسلایدری در کار نیست
          اما چون ممکنه دوباره بعدا اسلایدری خواسته بشه، فقط دکمه ها کامنت شدن و اسلایدر پابرجاست 
          اما فقط ۳ کارت رو نشون میده و به خاطر حذف دکمه ها امکان تغییر نداره */}
          {/* <ArrowsContainer>
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
          </ArrowsContainer> */}
        </LatestHeader>
        <HomeCarousel
          posts={posts}
          value={carouselValue}
          onChange={(value) => setCarouselValue(value)}
        />
        <Link href="/articles">
          <ShowMoreButton>Show More</ShowMoreButton>
        </Link>
      </Latest>
      <SectionContainer>
        <SectionWrapper>
          <OurMissionContent>
            <OurMissionTitle>Our Mission</OurMissionTitle>
            <OurMissionSubtitle>
              To empower 1000 aspiring Entrepreneurs to fire their boss with
              their side Hustle.
            </OurMissionSubtitle>
            <OurMissionDesc>
              {`We've know how risky it can be to start your own business. And we
              know that having a game plan can make that journey a whole lot
              easier.`}
            </OurMissionDesc>
            <br />
            <OurMissionDesc>
              {`We want to empower you with our combined experience of 20+
              years in the online business space.`}
            </OurMissionDesc>
            <br />
            <OurMissionDesc>
              {`With our expert analysts and 7 figure business owners, we know which side hustle actually has the
              potential to replace your day job and give you the freedom you
              deserve. That's why we only deliver hustles that have been vetted
              by our team.`}
            </OurMissionDesc>
            <br />
            <OurMissionDesc>
              {`As a Hustle Club Member, entrepreneurial success is
              in your favor.`}
            </OurMissionDesc>
          </OurMissionContent>
          <OurMissionImagContainer>
            <Image
              src="/ourMissionImage.jpg"
              alt="Our Mision"
              width={555}
              height={750}
            />
          </OurMissionImagContainer>
        </SectionWrapper>
      </SectionContainer>
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

  @media (max-width: 1366px) {
    height: 35rem;
  }
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
  width: 50%;
  height: auto;
  position: absolute;
  top: var(--header-height-desktop);
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
  padding: 0 2rem;
  margin-top: 5rem;
  height: 29rem;

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
  width: 50%;
  @media ${device.mobileL} {
    width: 100%;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 93px;
  line-height: 109px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 8rem;

  @media (max-width: 1366px) {
    margin-bottom: 5.5rem;
  }

  @media (max-width: 1260px) {
    font-size: 76px;
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
const SmartButton = styled(Button)`
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
  padding: 0 1rem;
`;
const LatestHeader = styled.div`
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

  @media ${device.laptop} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${device.tablet} {
    font-size: 7vw;
    line-height: 8vw;
  }
  @media ${device.mobileL} {
    font-size: 2rem;
    line-height: 2.2rem;
  }
`;
const SectionSubtitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  /* Gray 2 */

  color: var(--gray-color-normal);
`;
// const ArrowsContainer = styled.div`
//   display: flex;
// `;
// const ArrowButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
// `;
const ShowMoreButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 178px;
  height: 56px;
  margin: 3rem auto;
  background: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #1d3330;
  border: 2px solid #1d3330;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: var(--page-max-width);
`;
const OurMissionContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
`;
const OurMissionTitle = styled.h2`
  font-family: Bebas Neue;
  font-size: 56px;
  line-height: 67px;
  text-transform: capitalize;
  color: var(--primary-color-normal);
  margin: 0;
`;
const OurMissionSubtitle = styled.h3`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: var(--gray-color-normal);
`;
const OurMissionDesc = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--gray-color-normal);
  margin: 0;
`;
const OurMissionImagContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 1rem;
`;
