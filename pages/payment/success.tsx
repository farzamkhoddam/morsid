import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri";

import Link from "next/link";

const Thanks = () => (
  <div className="thanks-page">
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
      <h1>Your invoice successfully has been paid</h1>
      <p>Thank you for purchase.</p>
      <Link href="/">
        <a className="button">
          <RiArrowLeftSLine className="icon -left" />
          Lets go back to Homepage
        </a>
      </Link>
    </div>
  </div>
);

export default Thanks;
