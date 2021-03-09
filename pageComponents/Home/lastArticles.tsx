import { Posts_posts as PostsPage } from "../../wpapi";
import styled from "styled-components";
import { device } from "../../consts/theme";

import Link from "next/link";
import LighteningIcon from "components/Svgs/lightening";
import React from "react";
import LastPlaybooksCards from "./lastPlaybooksCards";

interface Props {
  posts: PostsPage;
}

export default function LastPlaybooks({ posts }: Props) {
  return (
    <SectionContainer>
      <StyledLighteningIcon1 />
      <LatestWrapper>
        <LatestHeader>
          <SectionTitle>The Shortest Path To Online Income</SectionTitle>
          <SectionSubtitle>
            {` Every 14 days, our team of analysts puts together a detailed,
            step-by-step playbook on proven side hustles that are generating
            real income in today's digital world. All you need to do is choose
            the side hustle that works with your lifestyle and take action on
            our detailed playbooks.`}
          </SectionSubtitle>
        </LatestHeader>
        {/* <HomeCarousel
          posts={posts}
          value={carouselValue}
          onChange={(value) => setCarouselValue(value)}
        /> */}
        <LastPlaybooksCards posts={posts} />
        <Link href="/playbooks">
          <ShowMoreButton>Show More</ShowMoreButton>
        </Link>
      </LatestWrapper>
    </SectionContainer>
  );
}

const LatestWrapper = styled.section`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: var(--page-max-width);
  margin-right: auto;
  margin-left: auto;
  padding: 0 2rem;
  @media ${device.tabletL} {
    margin-top: 19rem;
  }
  @media ${device.tabletS} {
    margin-top: 16rem;
  }
  @media ${device.mobileL} {
    margin-top: 45vw;
  }
`;
const LatestHeader = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: var(--page-max-width);
  @media ${device.tabletL} {
    text-align: center;
  }
`;
const SectionTitle = styled.h2`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 67px;
  text-transform: capitalize;

  @media ${device.laptopXS} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${device.tabletL} {
    font-size: 48px;
    line-height: 58px;
    margin-bottom: 20px;
  }
  @media ${device.mobileL} {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 24px;
  }
`;
const SectionSubtitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--gray-color-normal);
  margin-bottom: 2rem;
  @media ${device.mobileL} {
    font-size: 16px;
    line-height: 20px;
  }
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
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const StyledLighteningIcon1 = styled(LighteningIcon)`
  position: absolute;
  top: 40%;
  right: 0%;
  @media ${device.tabletL} {
    display: none;
  }
`;
