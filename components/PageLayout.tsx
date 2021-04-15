import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: ReactNode;
}
const PageLayout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default PageLayout;

const Container = styled.div`
  height: 100vh;
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
