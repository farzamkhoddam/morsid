import styled from "styled-components";
import { device } from "../consts/device";

const Footer = () => {
  return <Container></Container>;
};

export default Footer;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  justify-content: center;
  height: 398px;
  bottom: 0;
  background-color: var(--primary-color-normal);
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  @media ${device.tabletL} {
    height: 264px;
  }
  @media ${device.mobileL} {
    height: 299px;
  }
`;
