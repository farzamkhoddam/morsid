import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import { Expert, EXPERT_LIST } from "consts/experts";
import MaterialUIPickers from "pageComponents/expert/MaterialUIPickers";
import React from "react";
import SEO from "components/seo";
import { GetServerSideProps, Redirect } from "next";
import { getTokenCookie } from "utils/auth-cookie";
import ReserveMeetitg from "pageComponents/expert/ReserveMeeting";

export enum STEP {
  ExperProfile = 1,
  DateTimePicker = 2,
}
interface Props {
  isLogin: boolean;
}
export default function ExpertReserve({ isLogin }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const currentExpert = EXPERT_LIST.find((expert) => expert.slug === slug);

  return (
    <PageLayout isLogin={isLogin}>
      <SEO />
      <ReserveMeetitg currentExpert={currentExpert || ({} as Expert)} />
    </PageLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = getTokenCookie(req);
  const redirect: { redirect: Redirect } = {
    redirect: {
      statusCode: 302,
      destination: "/",
    },
  };

  if (!token) {
    return redirect;
  }

  return {
    props: {
      isLogin: !!token,
    },
    // revalidate: 20,
  };
};
