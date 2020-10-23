import React, { ReactNodeArray } from "react";
import Header from "./header";

import styled from "styled-components";

interface Props {
  children: ReactNodeArray;
  className?: string;
  wide?: boolean;
}

const Layout = ({ children, className, wide }: Props) => {
  return (
    <div className="primary-container">
      <Header />
      <Main className={className} wide={wide}>
        {children}
      </Main>
    </div>
  );
};

export default Layout;

const Main = styled.main<{ wide: boolean }>`
  margin: 0 auto;
  max-width:${(wide) => (wide ? "100vw" : "1240px")};
  padding: :${(wide) => (wide ? "0" : "0 20px")} ;
`;
