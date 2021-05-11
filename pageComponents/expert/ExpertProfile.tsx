import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Expert, EXPERT_LIST } from "consts/experts";
import { Paper } from "elements/Layout";
import { Body1, Body2, Caption } from "elements/typo";
import styled from "styled-components";
import Avatar from "components/Avatar";
import LinkdeinIcon from "elements/SVGs/LinkdinIcon";
import WebIcon from "elements/SVGs/WebIcon";

import Experts from "./Experts";
import ButtonLink from "elements/ButtonLink";
import Button from "elements/Button";
import { modalsContext } from "contexts/modalContext";
import { STEP } from ".";

interface Props {
  isLogin: boolean;
  currentExpert: Expert;
}

export default function ExpertProfile({ isLogin, currentExpert }: Props) {
  const { setLoginModal } = useContext(modalsContext);

  return (
    <>
      <ProfilePaper noHover={true}>
        <Avatar
          alt={currentExpert?.name || ""}
          imageUrl={
            currentExpert?.imageUrl || "/images/article-image-placeholder.jpg"
          }
        />

        <DataBlock style={{ marginLeft: "1rem" }}>
          <Body1 style={{ marginBottom: "18px", color: "var(--color-text1)" }}>
            {currentExpert?.name}
          </Body1>
          <Row2>
            <Body2 style={{ marginRight: "2.5rem" }}>
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
          {isLogin ? (
            <SetMeetongButton
              label="Set a meeting"
              to={`/expert/${currentExpert.slug}/reserve`}
            />
          ) : (
            <CheckPriceButton
              label="Check price"
              onClick={() => setLoginModal(true)}
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
      {isLogin && (
        <Experts
          currentExpert={currentExpert || ({} as Expert)}
          isLogin={isLogin}
        />
      )}
    </>
  );
}
const ProfilePaper = styled(Paper)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  max-width: 92.5rem;
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
  color: var(--color-text1);
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
    color: var(--color-text1);
  }
`;
