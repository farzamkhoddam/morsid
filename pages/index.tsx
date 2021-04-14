import { GetServerSideProps } from "next";

import SEO from "../components/seo";
import Footer from "components/footer";

import React from "react";

export default function Home() {
  return (
    <div>
      <SEO />

      <Footer />
    </div>
  );
}
