import React from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import Hero from "./Hero";
import Experts from "./Experts";

export default function HomePage() {
  return (
    <PageLayout>
      <SEO />
      <Hero />
      <Experts />
    </PageLayout>
  );
}
