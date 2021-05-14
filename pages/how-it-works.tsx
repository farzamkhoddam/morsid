import { GetServerSideProps } from "next";
import HowItsWorkUi from "pageComponents/HowItsWork";
import React from "react";
import { getTokenCookie } from "utils/auth-cookie";

export interface HowItsWorkProps {
  isLogin: boolean;
}

export default function HowItsWork(pageProps: HowItsWorkProps) {
  return <HowItsWorkUi pageProps={pageProps} />;
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
