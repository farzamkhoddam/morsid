import React from "react";
import ExpertsUi from "pageComponents/Experts";
import { GetServerSideProps } from "next";
import { getTokenCookie } from "utils/auth-cookie";

export interface ExpertsPageProps {
  isLogin: boolean;
}

export default function Experts(pageProps: ExpertsPageProps) {
  return <ExpertsUi pageProps={pageProps} />;
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
