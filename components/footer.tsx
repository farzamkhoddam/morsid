import styled from "styled-components";

import React from "react";
import Button from "./Button";
import { device } from "../consts/theme";
import Logo from "./Svgs/logo";
import Image from "next/image";

import GetEmail from "pageComponents/Home/getEmail";

const Footer = () => {
  return (
    <Container>
      <WaveHashur2Container>
        <Image
          src="/wave-hashur-2.svg"
          alt="circle-hashur"
          width={260}
          height={260}
        />
      </WaveHashur2Container>
      <WaveHashur4Container>
        <Image
          src="/wave-hashur-4.svg"
          alt="circle-hashur"
          width={260}
          height={260}
        />
      </WaveHashur4Container>
      <ContentWrapper>
        <CircleHashrContainer>
          <Image
            src="/circle-hashur.svg"
            alt="hashur"
            width={130}
            height={130}
          />
        </CircleHashrContainer>

        <Sentense>{`UNLOCK THE SKILLS FOR GENERATING "NEW MONEY"`}</Sentense>
        <Part2Container>
          <LogoContainer>
            <WhiteLogo width={"216"} height={"84"} />
          </LogoContainer>
        </Part2Container>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  justify-content: center;
  height: 480px;
  bottom: 0;
  background-color: var(--primary-color-normal);
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  @media ${device.tabletL} {
    height: 368px;
  }
  @media ${device.tabletS} {
    height: auto;
  }
`;
const ContentWrapper = styled.div`
  max-width: var(--page-max-width);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  @media ${device.tabletS} {
    text-align: center;
  }
`;
const Sentense = styled.h3`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 67px;
  text-transform: capitalize;
  color: #ffffff;
  width: fit-content;

  margin-top: 4rem;
  @media ${device.tabletL} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${device.tabletS} {
    font-size: 47px;
    line-height: 56px;
  }
  @media ${device.mobileL} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${device.mobileM} {
    font-size: 38px;
    line-height: 43px;
  }
  @media ${device.mobileS} {
    font-size: 31px;
    line-height: 37px;
  }
`;
const Part2Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8rem;

  @media ${device.tabletL} {
    justify-content: space-between;
    margin-top: 4rem;
  }
  @media ${device.tabletL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-bottom: 4rem;
  }
`;
const LogoContainer = styled.div`
  width: 70%;
  opacity: 0.3;
  margin-left: 3rem;
  color: var(--gray-color-xlight);
  mix-blend-mode: overlay;
  margin-left: 6rem;

  @media ${device.tabletL} {
    margin-left: 7rem;
    margin-top: 0.9rem;
  }

  @media ${device.tabletS} {
    margin: 0;
    margin-bottom: 4rem;
  }
`;
const StyledGetEmail = styled(GetEmail)`
  @media ${device.tabletL} {
    margin: 1rem 0;
  }
`;
const SmartButton = styled(Button)`
  width: 358px;
  height: 64px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  /* Bg Color */

  color: #1d3330;

  @media ${device.tabletL} {
    width: 252px;
    height: 64px;
    font-size: 16px;
    line-height: 20px;
  }
  @media ${device.mobileL} {
    width: 192px;
    height: 52px;
  }
`;

const WhiteLogo = styled(Logo)`
  @media ${device.mobileL} {
    width: 120%;
    height: 90%;
  }
`;

const CircleHashrContainer = styled.div`
  position: absolute;
  right: 10rem;
  top: -38px;
  opacity: 0.3;
  @media ${device.tabletS} {
    right: 2rem;
  }
`;
const WaveHashur2Container = styled.div`
  position: absolute;
  left: -97px;
  bottom: -93px;
  opacity: 0.3;
`;
const WaveHashur4Container = styled.div`
  position: absolute;
  top: -80px;
  right: -110px;
  opacity: 0.3;
  @media ${device.tabletL} {
    display: none;
  }
`;
