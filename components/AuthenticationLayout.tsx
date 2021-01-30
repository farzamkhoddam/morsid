import React from "react";
import styled from "styled-components";
import { device } from "consts/theme";
import { useWindowSize } from "hooks/useWindowSize";
import HomeIcon from "./Svgs/ic24-home";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

interface Props {
  title: string;
}

const AuthenticationLayout: React.FC<Props> = ({ title, children }) => {
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
        <Content>
          <Background />
          <FormWrapper>
            <TitleWrapper>
              <Link href="/">
                <HomeButton>
                  {isSmallDevice ? (
                    <HomeIcon width="16" height="16" />
                  ) : (
                    <HomeIcon />
                  )}
                  <HomeText>home</HomeText>
                </HomeButton>
              </Link>
              <Title>{title}</Title>
            </TitleWrapper>
            <PicAndForm>{children}</PicAndForm>
          </FormWrapper>
        </Content>
      </Container>
    </div>
  );
};
export default AuthenticationLayout;
const Container = styled.div`
  width: 100%;
  max-width: var(--max-width-page);
`;
const FormWrapper = styled.div`
  flex: 2;
`;
const HomeButton = styled.a`
  padding: 3rem 0 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: inherit;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: var(--secondary-color-normal);
  height: var(--header-height-desktop);
  width: auto;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: var(--accent-color-normal);
  }
  @media ${device.laptop} {
    color: white;
    padding: 0;
  }
`;

const HomeText = styled.div`
  margin-left: 2px;
`;
const Background = styled.div`
  flex: 2;
  position: relative;
  background-image: url(/signup.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  @media ${device.laptop} {
    display: none;
  }
`;
const Content = styled.div`
  display: flex;
  min-height: 100vh;
`;

const PicAndForm = styled.div`
  max-width: var(--page-max-width);
  padding: 0 1rem;
  width: 70%;
  max-width: 700px;
  margin-left: 3rem;

  @media ${device.laptop} {
    width: 100%;
    margin-left: 0;
    max-width: none;
    margin-top: 2rem;
  }
`;
const TitleWrapper = styled(PicAndForm)`
  @media ${device.laptop} {
    padding: 0 2rem;
    margin: 0;
    background: var(--primary-color-normal);
    color: white;
  }
`;
const Title = styled.div`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 67px;
  text-transform: uppercase;

  @media ${device.laptopL} {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 0.05em;
  }
  @media ${device.laptop} {
    padding-bottom: 2rem;
    text-align: center;
    width:60%;
    margin-left:auto;
    margin-right:auto;
    font-size:56px;
    line-height:67px;
  }
  @media ${device.laptopS}{
    font-size: 45px;
    line-height:50px;
  }
  @media ${device.tabletM}{
    font-size: 52px;
    line-height:50px;
    width:80%;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    line-height: 50px;
    font-size: 47px;
    
  }
  @media ${device.tabletS}{
    font-size: 40px;
    line-height: 45px;
  }
  @media ${device.mobileL} {
    font-size: rem;
    font-size:30px;
    line-height:30px;
    width:85%;
  }
  @media ${device.mobileM} {
    // font-size: 2rem;
    font-size: 25px;
  }
  @media ${device.mobileS} {
    // font-size: 2rem;
    font-size: 22px;
  }
`;
