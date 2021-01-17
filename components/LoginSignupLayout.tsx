import React from "react";
import styled from "styled-components";
import { device } from "consts/theme";
import Image from "next/image";
import { useWindowSize } from "hooks/useWindowSize";
import HomeIcon from "./Svgs/ic24-home";
import SignupForm from "perPageComponenta/signup/formView";
import LoginForm from "perPageComponenta/login/formView";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

interface Props {
  pageName: "SIGN UP" | "SIGN IN";
}

const LoginSignupLayout: React.FC<Props> = ({ pageName }) => {
  const windowSize = useWindowSize();
  const isSmallDevice = windowSize.width <= 700 ? true : false;

  return (
    <div className="account-page">
      <Toaster
        position="bottom-center"
        toastOptions={{
          error: {
            style: {
              background: "#161515",
              color: "white",
            },
          },
        }}
      />
      <Container>
        <Link href="/">
          <HomeButtonContainer>
            <HomeButton>
              {isSmallDevice ? (
                <HomeIcon width="16" height="16" />
              ) : (
                <HomeIcon />
              )}

              <HomeText>home</HomeText>
            </HomeButton>
          </HomeButtonContainer>
        </Link>
        <Background>
          <LeftDarkSection>
            {isSmallDevice ? (
              <Title>
                <DarkSide>
                  <DarkSideText>{`${pageName} TO Download`}</DarkSideText>
                  <DarkSideText>{`PLAYBOOKS`}</DarkSideText>
                </DarkSide>
              </Title>
            ) : (
              <Title>
                <DarkSide>
                  <DarkSideText>{`${pageName} TO`}</DarkSideText>
                  <DarkSideText>{`PLAYBOOKS`}</DarkSideText>
                </DarkSide>
              </Title>
            )}
          </LeftDarkSection>
          <RightLightSection>
            <LightSide>
              <Title>DOWNLOAD</Title>
            </LightSide>
          </RightLightSection>
        </Background>

        <Content>
          <PicAndForm>
            <ImageContainer>
              <Image
                src="/signup.jpg"
                alt="header"
                // layout="responsive"
                objectFit="contain"
                width={400}
                height={495}
              />
            </ImageContainer>
            {pageName === "SIGN UP" ? <SignupForm /> : <LoginForm />}
          </PicAndForm>
        </Content>
      </Container>
    </div>
  );
};
export default LoginSignupLayout;
const Container = styled.div`
  width: 100%;
  max-width: var(--max-width-page);
  height: 100vh;
`;
const HomeButtonContainer = styled.div`
  width: 100%;
  height: var(--header-height-desktop);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  @media ${device.mobileL} {
    height: 4rem;
  }
`;

const HomeButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  height: inherit;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  width: 100%;
  max-width: var(--page-max-width);

  z-index: 2;
  /* Text1 */
  color: var(--secondary-color-normal);
  @media ${device.tablet} {
    color: white;
  }
  @media ${device.mobileL} {
    font-size: 14px;
  }
`;
const HomeText = styled.div`
  margin-left: 2px;
`;
const Background = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  z-index: 2;
  overflow: auto;
  @media ${device.tablet} {
    z-index: 0;
  }
`;

const PicAndForm = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--page-max-width);
  padding: 0 1rem;
  height: 65%;
  margin-top: 16rem;
  width: inherit;
  height: 69%;
  @media ${device.laptopL} {
    margin-top: 15rem;
    width: inherit;
    height: 65%;
  }

  @media ${device.laptop} {
    margin-top: 14rem;
  }
  @media ${device.mobileL} {
    margin-top: 7rem;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  @media ${device.laptop} {
    width: 43%;
  }
  div {
    height: inherit;
    div {
      height: inherit;
      img {
        height: inherit;
      }
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;

const LeftDarkSection = styled.div`
  width: auto;
  background-color: var(--primary-color-normal);
  height: inherit;
  padding-left: 20%;
  padding-top: 7rem;
  z-index: 1;
  @media ${device.laptopL} {
    padding-left: 27%;
  }
  @media ${device.laptop} {
    padding-left: 14%;
  }
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    height: 25%;
    width: 100%;
    padding-left: 0;
    padding-top: 5rem;
  }
  @media ${device.mobileL} {
    padding-top: 3rem;
  }
`;
const RightLightSection = styled.div`
  width: auto;
  height: inherit;
  padding-top: 7rem;
  z-index: 1;
`;
const Title = styled.div`
  display: flex;
  margin: 0 1rem;
  text-align: left;
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5rem;
  line-height: 4rem;
  letter-spacing: 0.07em;

  @media ${device.laptopL} {
    font-size: 50px;
    line-height: 60px;
    letter-spacing: 0.05em;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    line-height: 40px;
  }
  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
  @media ${device.mobileM} {
    font-size: 2rem;
  }
`;

const DarkSide = styled.div`
  color: white;
  margin: 0;
`;
const DarkSideText = styled.div`
  width: auto;
  margin-left: auto;
  text-align: left;
  z-index: 2;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`;
const LightSide = styled.div`
  width: 60%;
  color: var(--primary-color-normal);
  padding-left: 0.5rem;
  margin: 0;
  @media ${device.tablet} {
    display: none;
  }
`;
