import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri";

import Link from "next/link";
import SEO from "../components/seo";
import SimplePageHeader from "components/simplePageHeader";

const Thanks = () => (
  <div className="thanks-page">
    <SEO title="Thank you" />
    <SimplePageHeader />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color-dark)",
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
