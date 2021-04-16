import { RiArrowLeftSLine, RiSkullLine } from "react-icons/ri";
import Link from "next/link";
import React from "react";
import PageLayout from "components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="not-found-page">
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
                color: "var(--primary-color-dark)",
              }}
            />
            <h1>Oops we did not expect that to happen</h1>
            <p>
              Have you wondered into the unknow. Let us help you, Please take a
              look at below options
            </p>
          </header>
          <Link href="/">
            <div className="button" style={{ marginTop: "2rem" }}>
              <RiArrowLeftSLine className="icon -left" />
              Back to Homepage
            </div>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
