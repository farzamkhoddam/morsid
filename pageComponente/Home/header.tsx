import { useState } from "react";

import styled from "styled-components";

import { device } from "../consts/theme";
import Image from "next/image";
import React from "react";

import Button from "components/Button";

import SmartCompBaseOnLogin from "components/smartCompBaseOnLogin";

export default function HomeHeader() {
  return (
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
  );
}

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
