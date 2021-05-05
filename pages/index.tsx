import React from "react";
import HomePage from "pageComponents/Home";
import { GetServerSideProps } from "next";
import { getTokenCookie } from "utils/auth-cookie";

export interface HomePageProps {
  isLogin: boolean;
}
export default function Home(pageProps: HomePageProps) {
  return <HomePage pageProps={pageProps} />;
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = getTokenCookie(req);

  return {
    props: {
      //navid check
      isLogin: !!token,
      // isLogin: !token,
    },
    // revalidate: 20,
  };
};
