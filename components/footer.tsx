import styled from "styled-components";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <Container>
      <Sentense>Do You Interenset?</Sentense>
      <LogoContainer>
        <Image src="/logo-white.svg" alt="Logo" width={150} height={60} />
      </LogoContainer>
      <Button title="SIGN UP NOW" type="glow" />
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
  position: absolute;
  bottom: 0;
  background-color: var(--primary-color-normal);
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
`;
const LogoContainer = styled.div`
  width: auto;
  opacity: 0.3;
`;
