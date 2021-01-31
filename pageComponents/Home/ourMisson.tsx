import styled from "styled-components";
import Image from "next/image";
import React from "react";

import LighteningIcon from "components/Svgs/lightening";
import SmartCompBaseOnLogin from "components/smartCompBaseOnLogin";
import Button from "components/Button";
import { device } from "consts/theme";

export default function OurMission() {
  return (
    <SectionContainer>
      <StyledLighteningIcon2 />
      <SectionWrapper>
        <OurMissionContent>
          <OurMissionTitle>Our Mission</OurMissionTitle>
          <OurMissionSubtitle>
            To empower 1000 aspiring Entrepreneurs to fire their boss with their
            side Hustle.
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
                <SmartButton
                  to="/articles"
                  title="Read Artciles"
                  viewType="glow"
                />
              }
            />
          )}
        </OurMissionContent>
        <OurMissionImagContainer>
          <Image
            src="/ourMissionImage.jpg"
            alt="Our Mision"
            width={555}
            height={750}
            objectFit="cover"
          />
        </OurMissionImagContainer>
      </SectionWrapper>
    </SectionContainer>
  );
}
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const StyledLighteningIcon2 = styled(LighteningIcon)`
  position: absolute;
  bottom: 0;
  left: 0%;
  transform: rotate(180deg);
`;
const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 2rem;
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
const SmartButton = styled(Button)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  width: 358px;
  height: 64px;
  @media ${device.tabletL} {
    width: 358px;
  }
  @media ${device.mobileL} {
    width: 89vw;
  }
`;

const OurMissionImagContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 1rem;
`;
