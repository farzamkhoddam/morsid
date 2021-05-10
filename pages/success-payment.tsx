import React from "react";
import { GetServerSideProps } from "next";
import { getTokenCookie } from "utils/auth-cookie";
import PageLayout from "components/PageLayout";
import SEO from "components/seo";
import { Expert } from "consts/experts";
import MaterialUIPickers from "pageComponents/expert/MaterialUIPickers";
import styled from "styled-components";
import Avatar from "components/Avatar";
import { Paper } from "elements/Layout";
import { Body1 } from "elements/typo";
import GetEmailImage from "pageComponents/expert/GetEmailImage";

export interface SuccessPaymentPageProps {
  isLogin: boolean;
}
export default function SuccessPayment({ isLogin }: SuccessPaymentPageProps) {
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

  return {
    props: {
      isLogin: !!token,
    },
    // revalidate: 20,
  };
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
