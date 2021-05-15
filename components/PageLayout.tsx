import React, { ReactNode } from "react";
import styled, { CSSObject } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import ToasterContainer from "./ToasterContainer";

interface Props {
  children: ReactNode;
  currentTabIndex?: number;
  isLogin: boolean;
  className?: string;
  style?: CSSObject;
  mainStyle?: CSSObject;
}
const PageLayout = ({
  children,
  currentTabIndex = -1,
  isLogin,
  className,
  style,
  mainStyle,
}: Props) => {
  return (
    <Container className={className} style={style}>
      <ToasterContainer />
      <Header currentTabIndex={currentTabIndex} isLogin={isLogin} />
      <Main style={mainStyle}>{children}</Main>
      <Footer currentTabIndex={currentTabIndex} />
    </Container>
  );
};

export default PageLayout;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 1rem;
  margin: 0 auto;
`;
