import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri";
import SEO from "../../components/seo";
import Link from "next/link";

const NotFound = () => (
  <div className="not-found-page">
    <SEO title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Oops we did not expect that to happen</h1>
        <p>
          Have you wondered into the unknow. Let us help you, Please take a look
          at below options
        </p>
      </header>
      <Link href="/">
        <div className="button">
          <RiArrowLeftSLine className="icon -left" />
          Back to Homepage
        </div>
      </Link>
      <Link href="/contact">
        <div className="button -outline">
          Report this <RiBugLine className="icon -right" />
        </div>
      </Link>
    </div>
  </div>
);

export default NotFound;
