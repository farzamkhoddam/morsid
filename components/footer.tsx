import styled from "styled-components";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <Container>
      <Sentense>Do You Interenset?</Sentense>
      <Part2Container>
        <LogoContainer>
          <Image src="/logo-white.svg" alt="Logo" width={150} height={60} />
        </LogoContainer>
        <SignUpButton title="SIGN UP NOW" type="glow" />
      </Part2Container>
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
  width: 100%;
  margin-left: 1rem;
`;
const LogoContainer = styled.div`
  width: auto;
  opacity: 0.3;
  margin-left: 3rem;
`;
const SignUpButton = styled(Button)`
  height: 88px;
  width: 358px;
`;
const Part2Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 1rem;
`;
