import React from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import styled from "styled-components";
import { Body1, Body3, H3, Title } from "elements/typo";
import { HowItsWorkProps } from "pages/how-it-works";
import { device } from "consts/device";

interface Props {
  pageProps: HowItsWorkProps;
}
export default function HowItsWorkUi({ pageProps }: Props) {
  return (
    <PageLayout currentTabIndex={1} isLogin={pageProps.isLogin}>
      <SEO />
      <Container>
        <MainTitle>
          <StyledH3 style={{ marginRight: "8px" }}>
            Do you need help to
          </StyledH3>
          <Underline>
            <StyledH3>grow</StyledH3>
            <Line
              style={{
                content: "url(/svgs/arc.svg)",
                width: "77px",
                height: "10px",
              }}
            />
          </Underline>
          <StyledH3>your startup?</StyledH3>
        </MainTitle>
        <SubTitle>Try Morsid platform, It’s really simple!</SubTitle>
        <Row>
          <RowItem>
            <MarginLeftImg src="/svgs/HowItsWork1.svg" alt="image" />
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
        <ReverseRow>
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
            <MarginRightImg src="/svgs/HowItsWork2.svg" alt="image" />
          </RowItem>
        </ReverseRow>
        <Row>
          <RowItem
            style={{
              marginRight: "10px",
            }}
          >
            <MarginLeftImg src="/svgs/HowItsWork3.svg" alt="image" style={{}} />
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
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledH3 = styled(H3)`
  @media ${device.mobileL} {
    font-size: 30px;
  }
`;
const SubTitle = styled(Title)`
  color: var(--color-text1);
  margin-bottom: 80px;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 21px;
  }
`;
const Underline = styled.div`
  margin-right: 8px;
`;
const Line = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-bottom: 130px;
  @media ${device.tabletL} {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

const ReverseRow = styled(Row)`
  @media ${device.tabletL} {
    flex-direction: column-reverse;
`;
const MarginLeftImg = styled.img`
  margin-left: -48px;
  @media ${device.tabletL} {
    margin: 0;
    width: 100%;
  }
`;
const MarginRightImg = styled.img`
  margin-right: -48px;
  @media ${device.tabletL} {
    margin: 0;
    width: 100%;
  }
`;
const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media ${device.mobileL} {
    width: 100%;
    flex: 0;
  }
`;
