import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import ToasterContainer from "./ToasterContainer";

interface Props {
  children: ReactNode;
  currentTabIndex?: number;
  isLogin: boolean;
}
const PageLayout = ({ children, currentTabIndex = -1, isLogin }: Props) => {
  return (
    <Container>
      <ToasterContainer />
      <Header currentTabIndex={currentTabIndex} isLogin={isLogin} />
      <Main>{children}</Main>
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
