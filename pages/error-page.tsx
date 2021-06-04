import React, { useState } from "react";
import { GetServerSideProps, Redirect } from "next";
import { getTokenCookie } from "utils/auth-cookie";
import PageLayout from "components/PageLayout";
import SEO from "components/seo";
import styled from "styled-components";
import { Paper } from "elements/Layout";
import { Body1 } from "elements/typo";
import ErrorIcon from "elements/SVGs/ErrorIcon";
import { device } from "consts/device";

export interface Props {
  isLogin: boolean;
}

export default function ShowErrorPage({ isLogin }: Props) {
  return (
    <PageLayout isLogin={isLogin}>
      <SEO />
      <Container>
        <Paper style={{ marginBottom: "256px" }}>
          <FlexContainer>
            <ErrorIcon />
            <Body1
              style={{
                color: "var(--color-error)",
                marginBottom: "40px",
                marginTop: "20px",
              }}
            >
              Ooops :(
            </Body1>
            <StyledBody1 style={{}}>
              Sorry, your payment was successful but we couldn't book your
              meeting, Please contact us via morsid@support.com and we solve
              your problem as soon as possible.
            </StyledBody1>
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

  return {
    props: {
      isLogin: !!token,
    },
    // revalidate: 20,
  };
};

const Container = styled.div`
  width: 100%;
  padding: 40px;
  @media ${device.mobileL} {
    padding: 40px 0;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  text-align: center;
  color: var(--color-text1);
`;
const StyledBody1 = styled(Body1)`
  color: var(--color-text1);
  padding: 0 17%;
  @media ${device.mobileL} {
    padding: 0;
    font-size: 18px;
  }
`;
