import React from "react";
import HomePage from "pageComponents/Home";
import { GetServerSideProps } from "next";
import { getTokenCookie } from "utils/auth-cookie";
import ExpertUi from "pageComponents/expert";

export interface ExpertPageProps {
  isLogin: boolean;
}
export default function Home(pageProps: ExpertPageProps) {
  return <ExpertUi pageProps={pageProps} />;
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = getTokenCookie(req);

  return {
    props: {
      isLogin: !!token,
    },
    // revalidate: 20,
  };
};
