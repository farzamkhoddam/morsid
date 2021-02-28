import styled from "styled-components";
import { device } from "../consts/theme";
import Logo from "./Svgs/logo";
import Image from "next/image";

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

        <Sentense>{`UNLOCK THE SKILLS YOU NEED TO START GENERATING "NEW MONEY"`}</Sentense>
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
const ContentWrapper = styled.div`
  max-width: var(--page-max-width);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  text-align: center;
`;
const Sentense = styled.h3`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
  margin-top: 108px;
  @media ${device.tabletL} {
    font-size: 24px;
    line-height: 29px;
    margin-top: 80px;
  }

  @media ${device.mobileL} {
    font-size: 24px;
    line-height: 29px;
    margin-top: 86px;
  }
`;
const Part2Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 69px;

  @media ${device.tabletL} {
    margin-top: 39px;
  }
  @media ${device.mobileL} {
    margin-top: 44px;
  }
`;
const LogoContainer = styled.div`
  width: auto;
  opacity: 0.3;
  color: var(--gray-color-xlight);
  mix-blend-mode: overlay;
  @media ${device.tabletL} {
    svg {
      height: 53px;
    }
  }
  @media ${device.mobileL} {
    svg {
      height: 40px;
    }
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
    display: none;
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
