import React, { useState } from "react";
import { GetServerSideProps, Redirect } from "next";
import { getTokenCookie } from "utils/auth-cookie";
import PageLayout from "components/PageLayout";
import SEO from "components/seo";
import styled from "styled-components";
import { Paper } from "elements/Layout";
import { Body1 } from "elements/typo";
import GetEmailImage from "pageComponents/expert/GetEmailImage";
import axios from "axios";
import { UserData } from "interfaces/user";
import toast from "react-hot-toast";
import Loading from "components/loading";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

export interface SuccessPaymentPageProps {
  isLogin: boolean;
  error: { status: boolean; message?: string };
  userData: UserData;
}

export default function SuccessPayment(
  // props,
  { isLogin, error, userData }: SuccessPaymentPageProps,
) {
  const router = useRouter();

  const { expertMail, reserveDate, expert, session_id } = router.query;
  const [loading, setLoading] = useState<boolean>(true);

  // اگه نتونستنیم مشخصات کابربری که جلسه رزرو کرده رو بگیریم
  if (process.browser) {
    if (error.status === true) {
      router.replace("/error-page");
    }
    axios
      .post(`/api/reserve-meeting/`, {
        userMail: userData.email,
        expertMail,
        expert,
        reserveDate,
        session_id,
      })
      .then((response) => {
        setLoading(false);
      })
      .catch((err) => {
        // اگه نتونستیم جلسه ای با اکسپرت رزرو کنیم
        router.replace("/error-page");
      });
    if (loading) {
      return <LoadingPage />;
    }
  }
  return (
    <PageLayout isLogin={isLogin}>
      <SEO />
      <Container>
        <Paper style={{ marginBottom: "256px" }}>
          <FlexContainer>
            <Body1
              style={{
                width: "315px",
                color: "var(--color-text1)",
                marginBottom: "40px",
              }}
            >
              Your meeting was successfully set You'll get information via email
            </Body1>
            <GetEmailImage />
          </FlexContainer>
        </Paper>
      </Container>
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
  try {
    const resp = await axios.post(
      `${process.env.BASE_URL}/api/current_user/`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );
    return {
      props: {
        isLogin: !!token,
        error: { status: false },
        userData: resp.data,
      },
    };
  } catch (err) {
    return {
      props: {
        isLogin: !!token,
        error: { status: true, message: err },
        userData: null,
      },
    };
  }
};

const Container = styled.div`
  width: 100%;
  padding: 2.5rem;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-text1);
  padding: 100px;
`;
const LoadingPage = styled(Loading)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
`;
