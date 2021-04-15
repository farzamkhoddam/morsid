import { GetServerSideProps } from "next";

import SEO from "../components/seo";
import Footer from "components/footer";

import React from "react";
import Button from "elements/Button";
import styled from "styled-components";
import LinkdeinIcon from "elements/SVGs/LinkdinIcon";
import WebIcon from "elements/SVGs/WebIcon";

export default function Home() {
  return (
    <div>
      <SEO />
      <TestButton label="test1" />
      <TestButton label="test2" border={true} />
      <LinkdeinIcon />
      <WebIcon />
      <Footer />
    </div>
  );
}
const TestButton = styled(Button)`
  width: 183px;
  height: 54px;
`;
