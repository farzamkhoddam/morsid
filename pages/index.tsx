import { GetServerSideProps } from "next";

import SEO from "../components/seo";
import Footer from "components/footer";

import React from "react";
import Button from "elements/Button";
import styled from "styled-components";
import LinkdeinIcon from "elements/SVGs/LinkdinIcon";
import WebIcon from "elements/SVGs/WebIcon";
import PageLayout from "components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      {/* <SEO /> */}
      <TestButton label="test1" />
      <TestButton label="test2" border={true} />
      <LinkdeinIcon />
      <WebIcon />
    </PageLayout>
  );
}
const TestButton = styled(Button)`
  width: 183px;
  height: 54px;
`;
