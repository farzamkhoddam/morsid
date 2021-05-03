import React, { useContext, useEffect } from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import { Expert, EXPERT_LIST } from "consts/experts";
import { Paper } from "elements/Layout";
import { Body1, Body2, Caption } from "elements/typo";
import styled from "styled-components";
import Avatar from "components/Avatar";
import LinkdeinIcon from "elements/SVGs/LinkdinIcon";
import WebIcon from "elements/SVGs/WebIcon";
import { ExpertPageProps } from "pages/expert/[slug]";
import Experts from "./Experts";
import ButtonLink from "elements/ButtonLink";
import Button from "elements/Button";
import { modalsContext } from "contexts/modalContext";

export default function ExpertUi({ isLogin }: ExpertPageProps) {
  const { registerModal, setRegisterModal } = useContext(modalsContext);
  const router = useRouter();
  const { slug } = router.query;
  const currentExpert = EXPERT_LIST.find((expert) => expert.slug === slug);

  return (
    <PageLayout isLogin={isLogin}>
      <SEO />

      <ProfilePaper noHover={true}>
        <Avatar
          alt={currentExpert?.name || ""}
          imageUrl={
            currentExpert?.imageUrl || "/images/article-image-placeholder.jpg"
          }
        />

        <DataBlock style={{ marginLeft: "1rem" }}>
          <Body1
            style={{ marginBottom: "18px", color: "var(--text-color-dark)" }}
          >
            {currentExpert?.name}
          </Body1>
          <Row2>
            <Body2 style={{ marginRight: "40px" }}>
              {currentExpert?.title}
            </Body2>
            {currentExpert?.linkdinAddress && (
              <a href={currentExpert?.linkdinAddress} target="_blank">
                <LinkdeinIcon style={{ marginRight: "20px" }} />
              </a>
            )}
            {currentExpert?.websiteAddress && (
              <a href={currentExpert?.websiteAddress} target="_blank">
                <WebIcon />
              </a>
            )}
          </Row2>
        </DataBlock>

        <ReserveBlock>
          {isLogin && (
            <Items>
              <Price>{currentExpert?.price || "$"}</Price>
              <Caption>per hour</Caption>
            </Items>
          )}
          {/* {isLogin ? (
            <SetMeetongButton href={`#section3`}>Check price</SetMeetongButton>
          ) : (
            <CheckPriceButton href={`#section3`}>Check price</CheckPriceButton>
          )} */}
          {!isLogin ? (
            //navid change to
            <SetMeetongButton label="Set a meeting" to="/" />
          ) : (
            <CheckPriceButton
              label="Check price"
              onClick={() => setRegisterModal(true)}
            />
          )}
        </ReserveBlock>
      </ProfilePaper>
      <DescPaper noHover={true}>
        <FullDesc
          dangerouslySetInnerHTML={{
            __html: currentExpert?.fullDesc || "<div/>",
          }}
        />
      </DescPaper>
      <Experts currentExpert={currentExpert || ({} as Expert)} />
    </PageLayout>
  );
}
const ProfilePaper = styled(Paper)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  max-width: 940px;
  margin-right: auto;
  margin-left: auto;
`;
const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row2 = styled.div`
  display: flex;
  align-items: center;
`;
const Items = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
`;
const ReserveBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 221px;
  align-items: center;
  margin-left: auto;
`;
const Price = styled(Body2)`
  color: var(--text-color-dark);
  margin-right: 4px;
`;
const SetMeetongButton = styled(ButtonLink)`
  width: 221px;
  height: 54px;
`;
const CheckPriceButton = styled(Button)`
  width: 149px;
  height: 54px;
`;
// const SetMeetongButton=
const DescPaper = styled(Paper)`
  width: 100%;
  max-width: 940px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 46px;
`;
const FullDesc = styled.div`
  li {
    margin-bottom: 30px;
  }
  li,
  p {
    color: var(--text-color-normal);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: var(--text-color-dark);
  }
`;
const BottomPaper = styled(Paper)`
  width: 100%;
  max-width: 940px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 46px;
`;
