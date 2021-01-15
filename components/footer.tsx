import styled from "styled-components";

import React from "react";
import Button from "./Button";
import { device } from "../consts/theme";
import Logo from "./Svgs/logo";
import Image from "next/image";

const Footer = () => {
  return (
    <Container>
      <ContentWrapper>
        <ImageContainer>
        <Image
          src="/circle-hashur.svg"
          alt="circle-hashur"
          width={130}
          height={130}
        />
        </ImageContainer>
        <Sentense>Do You Interenset?</Sentense>
        <Part2Container>
          <LogoContainer>
            <WhiteLogo />
          </LogoContainer>
          <SignUpButton title="SIGN UP NOW" viewType="glow" />
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
  height: 360px;
  bottom: 0;
  background-color: var(--primary-color-normal);
  flex-wrap: wrap;
`;
const Sentense = styled.h3`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height */
  text-transform: capitalize;
  /* White */
  color: #ffffff;
  width: fit-content;
  margin-left: 1rem;
`;
const LogoContainer = styled.div`
  width: auto;
  opacity: 0.3;
  margin-left: 3rem;
  color: #dbdddc;
  mix-blend-mode: overlay;
  @media ${device.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-bottom: 4rem;
  }
  @media ${device.tablet} {
    margin-left: 2rem;
    margin-top: 0.9rem;
  }
  @media ${device.mobileL} {
    margin: 0;
  }
`;
const SignUpButton = styled(Button)`
  height: 70px;
  width: 340px;
  margin-right: 1rem;
  @media ${device.laptop} {
    height: 70%;
    width: 35%;
  }
  @media ${device.tablet} {
    height: 70%;
    width: 40%;
    margin-top: 0.9rem;
  }
  @media ${device.mobileL} {
    height: 100%;
    width: 80%;
    margin-right: 0;
  }
`;
const Part2Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97%;
  margin: 0 1rem;
  height: 37%;
  margin-left: 0;
  align-items: center;
  @media ${device.mobileL} {
    flex-direction: column;
    padding-bottom: 2rem;
    height: 45%;
  }
  @media ${device.tablet} {
    justify-content: space-between;
  }
`;
const WhiteLogo = styled(Logo)`
  @media ${device.mobileL} {
    width: 120%;
    height: 90%;
  }
`;
const ContentWrapper = styled.div`
  max-width: var(--page-max-width);
  width: 100%;
  position: relative;
`;
const ImageContainer = styled.div`
  position:absolute;
  right: 10rem;
  top: -38px;
  @media ${device.laptopL}{
    display:none;
  }
`
