import React from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import { EXPERT_LIST } from "consts/experts";
import { Paper } from "elements/Layout";

import { Body1, Body2, Body3, Caption } from "elements/typo";
import styled from "styled-components";
import Avatar from "components/Avatar";
import LinkdeinIcon from "elements/SVGs/LinkdinIcon";
import Link from "next/link";
import WebIcon from "elements/SVGs/WebIcon";
import ButtonLink from "elements/ButtonLink";

export default function ExpertUi() {
  const router = useRouter();
  const { slug } = router.query;
  const currentExpert = EXPERT_LIST.find((expert) => expert.slug === slug);
  console.log("navid foo=", currentExpert);
  return (
    <PageLayout>
      <SEO />
      <TopPaper>
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
            <Body2>{currentExpert?.title}</Body2>
            <Link href={currentExpert?.linkdinAddress || "#"}>
              <LinkdeinIcon style={{ margin: "0 20px 0 40px" }} />
            </Link>
            <Link href={currentExpert?.linkdinAddress || "#"}>
              <WebIcon />
            </Link>
          </Row2>
        </DataBlock>
        <ReserveBlock>
          <Items>
            <Price>{currentExpert?.price || "$"}</Price>
            <Caption>per hour</Caption>
          </Items>
          <MeetingButton label="Set a meeting" to={`/expert/${slug}`} />
        </ReserveBlock>
      </TopPaper>
      <MiddlePaper>
        <Body1
          style={{ marginBottom: "1rem", color: "var(--text-color-dark)" }}
        >
          How can I help you?
        </Body1>
        <Body3>
          I'm the CEO of Dropbox and have faced enormous amounts of challenges
          in the past years. I can help you about how to run, scale and grow
          your company.I like to help entrepreneurs think through their business
          strategy - how to scale a company, hire the right people to take it to
          the next level or what kind of investors to get on board.
        </Body3>
      </MiddlePaper>
    </PageLayout>
  );
}
const TopPaper = styled(Paper)`
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
const MeetingButton = styled(ButtonLink)`
  width: 100% !important;
`;

const MiddlePaper = styled(Paper)`
  width: 100%;
  max-width: 940px;
  margin-right: auto;
  margin-left: auto;
`;
