import React from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import { EXPERT_LIST } from "consts/experts";
import { Paper } from "elements/Layout";

import { Body1, Body2, Caption } from "elements/typo";
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
    </PageLayout>
  );
}
const TopPaper = styled(Paper)`
  display: flex;
  align-items: center;
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
