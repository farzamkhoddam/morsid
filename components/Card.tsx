import React from "react";
import styled from "styled-components";
import { Body2, Body3, Caption, H3 } from "elements/typo";
import { Paper } from "elements/Layout";
import LinkdeinIcon from "elements/SVGs/LinkdinIcon";
import WebIcon from "elements/SVGs/WebIcon";

import ButtonLink from "elements/ButtonLink";
import Avatar from "./Avatar";
import Link from "next/link";

interface Props {
  name: string;
  desc: string;
  imageUrl: string;
  price: string;
  slug: string;
  isLogin: string;
  linkdinAddress?: string;
  websiteAddress?: string;
  className?: string;
}
export default function Card({
  name,
  desc,
  imageUrl,
  price,
  slug,
  isLogin,
  linkdinAddress,
  websiteAddress,
  className,
}: Props) {
  return (
    <Container className={className}>
      <Avatar alt={name} imageUrl={imageUrl} />
      <Body2 style={{ marginBottom: "11px", color: "var(--text-color-dark)" }}>
        {name}
      </Body2>
      <Body3 style={{ marginBottom: "25px" }}>{desc}</Body3>
      <BlankSpace />
      <DataRow>
        <Items>
          {linkdinAddress && (
            <Link href={linkdinAddress}>
              <LinkdeinIcon style={{ marginRight: "20px" }} />
            </Link>
          )}
          {websiteAddress && (
            <Link href={websiteAddress}>
              <WebIcon />
            </Link>
          )}
        </Items>
        {isLogin && (
          <Items>
            <Price>{price}</Price>
            <Caption>per hour</Caption>
          </Items>
        )}
      </DataRow>
      <MeetingButton label="Set a meeting" to={`/expert/${slug}`} />
    </Container>
  );
}
const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 358px;
  height: auto;
  position: relative;
`;
const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
const Items = styled.div`
  display: flex;
  align-items: baseline;
`;
const BlankSpace = styled.div`
  flex: 1;
`;

const Price = styled(Body2)`
  color: var(--text-color-dark);
  margin-right: 4px;
`;
const MeetingButton = styled(ButtonLink)`
  width: 100% !important;
`;
