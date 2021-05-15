import { RiArrowLeftSLine, RiSkullLine } from "react-icons/ri";
import Link from "next/link";
import React from "react";
import PageLayout from "components/PageLayout";
import { H1, Body1, Title } from "elements/typo";

export default function Page404() {
  return (
    <PageLayout
      isLogin={false}
      mainStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        <Title style={{ marginBottom: "1rem" }}>PAGE NOT FOUND</Title>
        <Body1>We can't seem to find the page you're looking for.</Body1>
      </header>
      <Link href="/">
        <div style={{ marginTop: "2rem", cursor: "pointer" }}>
          <RiArrowLeftSLine />
          Back to Homepage
        </div>
      </Link>
    </PageLayout>
  );
}
