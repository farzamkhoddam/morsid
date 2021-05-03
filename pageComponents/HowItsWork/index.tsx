import React from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import styled from "styled-components";
import { Body1, Body3, H3, Title } from "elements/typo";
import { HowItsWorkProps } from "pages/how-its-work";

interface Props {
  pageProps: HowItsWorkProps;
}
export default function HowItsWorkUi({ pageProps }: Props) {
  return (
    <PageLayout currentTabIndex={1} isLogin={pageProps.isLogin}>
      <SEO />
      <Container>
        <MainTitle>
          <H3 style={{ marginRight: "8px" }}>Do you need help to</H3>
          <Underline>
            <H3>grow</H3>
            <div
              style={{
                content: "url(/svgs/arc.svg)",
                width: "77px",
                height: "10px",
              }}
            />
          </Underline>
          <H3>your startup?</H3>
        </MainTitle>
        <SubTitle>Try Morsid platform, It’s really simple!</SubTitle>
        <Row>
          <RowItem>
            <img
              src="/svgs/HowItsWork1.svg"
              alt="image"
              style={{
                marginLeft: "-48px",
              }}
            />
          </RowItem>
          <RowItem
            style={{
              marginRight: "10px",
            }}
          >
            <Title style={{ marginBottom: "24px" }}>Find an expert</Title>
            <Body1>
              Browse our community of experts to find the right one for you.
            </Body1>
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <Title style={{ marginBottom: "24px" }}>
              Review expert profile
            </Title>
            <Body1>
              Get some information about the expert, background, achivement and
              how he or she can help you.
            </Body1>
          </RowItem>
          <RowItem>
            <img
              src="/svgs/HowItsWork2.svg"
              alt="image"
              style={{
                marginRight: "-48px",
              }}
            />
          </RowItem>
        </Row>
        <Row>
          <RowItem
            style={{
              marginRight: "10px",
            }}
          >
            <img
              src="/svgs/HowItsWork3.svg"
              alt="image"
              style={{
                marginLeft: "-48px",
              }}
            />
          </RowItem>
          <RowItem>
            <Title style={{ marginBottom: "24px" }}>Set a meeting</Title>
            <Body1>
              At this time, you will be pre-charged for the estimated length of
              the call, based on the expert's per-hour rate.
            </Body1>
          </RowItem>
        </Row>
      </Container>
    </PageLayout>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainTitle = styled.div`
  display: flex;
  margin-bottom: 43px;
  margin-top: 42px;
`;
const SubTitle = styled(Title)`
  color: var(--text-color-dark);
  margin-bottom: 80px;
`;
const Underline = styled.div`
  margin-right: 8px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-bottom: 130px;
`;
const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
