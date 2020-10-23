import React from "react";

import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri";

import Link from "next/link";
import SEO from "../../components/seo";

const Thanks = () => (
  <div className="thanks-page">
    <SEO title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Got your message</h1>
      <p>Thank you for getting in touch us. We will get back to you shortly.</p>
      <Link href="/">
        <div className="button">
          <RiArrowLeftSLine className="icon -left" />
          Lets go back to Homepage
        </div>
      </Link>
    </div>
  </div>
);

export default Thanks;
