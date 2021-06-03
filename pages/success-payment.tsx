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
import Loading from "components/loading";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { device } from "consts/device";

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
  const { expertMail, reservedTime, expert, session_id } = router.query;
  // چون توی خوندن از یوآرال علامت + با اسپیس جایگزین میشه و ما در این متغیر هیچ علامت اسپیسی نداریم. پس اینجا میتونیم اسپیس رو با مثبت جایگزین کنیم
  // برای تایم زون هایی که علامت مثبت ندارن این کار الزامیه
  const reservedTimeWithPlus = reservedTime?.toString().replace(" ", "+");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (error.status === true) {
      router.replace("/error-page");
    }
    axios
      .post(`/api/reserve-meeting/`, {
        userMail: userData.email,
        expertMail,
        expert,
        reservedTime: reservedTimeWithPlus,
        session_id,
      })
      .then((response) => {
        setLoading(false);
      })
      .catch((err) => {
        // اگه نتونستیم جلسه ای با اکسپرت رزرو کنیم
        router.replace("/error-page");
      });
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <PageLayout isLogin={isLogin}>
      <SEO />
      <Container>
        <Paper style={{ marginBottom: "256px" }}>
          <FlexContainer>
            <StyledBody1>
              Your meeting was successfully set You'll get information via email
            </StyledBody1>
            <GetEmailImageContainer>
              <GetEmailImage />
            </GetEmailImageContainer>
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
    // get current user data
    const resp = await axios.post(
      `${process.env.BASE_URL}/backendapi/current_user/`,
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
  @media ${device.mobileL} {
    padding: 0;
  }
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
const StyledBody1 = styled(Body1)`
  width: 315px;
  color: var(--color-text1);
  marginbottom: 40px;
  @media ${device.mobileL} {
    font-size: 17px;
    width: 280px;
  }
`;
const GetEmailImageContainer = styled.div``;
const LoadingPage = styled(Loading)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
`;
