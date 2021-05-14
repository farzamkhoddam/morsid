import React from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import Hero from "./Hero";
import Experts from "./Experts";
import { ExpertsPageProps } from "pages/experts";
interface Props {
  pageProps: ExpertsPageProps;
}

export default function ExpertsUi({ pageProps }: Props) {
  return (
    <PageLayout currentTabIndex={0} isLogin={pageProps.isLogin}>
      <SEO />
      <Experts isLogin={pageProps.isLogin} />
    </PageLayout>
  );
}
