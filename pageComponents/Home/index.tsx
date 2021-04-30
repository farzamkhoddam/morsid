import React from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import Hero from "./Hero";
import Experts from "./Experts";
import { HomePageProps } from "pages";

interface Props {
  pageProps: HomePageProps;
}
const HomePage: React.FC<Props> = ({ pageProps }) => {
  return (
    <PageLayout isLogin={pageProps.isLogin}>
      <SEO />
      <Hero />
      <Experts />
    </PageLayout>
  );
};
export default HomePage;
