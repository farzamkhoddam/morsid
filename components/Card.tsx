import React from "react";
import styled from "styled-components";
import { Body2, Body3, Caption, H3 } from "elements/typo";
import { Paper } from "elements/Layout";
import Image from "next/image";
import LinkdeinIcon from "elements/SVGs/LinkdinIcon";
import WebIcon from "elements/SVGs/WebIcon";

import ButtonLink from "elements/ButtonLink";

interface Props {
  name: string;
  desc: string;
  imageUrl: string;
  price: string;
  className?: string;
}
export default function Card({
  name,
  desc,
  imageUrl,
  price,
  className,
}: Props) {
  return (
    <Container className={className}>
      <Ring>
        <ImageContainer>
          <Image
            src={imageUrl}
            alt={name}
            width={95}
            height={95}
            quality={100}
          />
        </ImageContainer>
      </Ring>
      <Body2 style={{ marginBottom: "11px", color: "var(--text-color-dark)" }}>
        {name}
      </Body2>
      <Body3 style={{ marginBottom: "25px" }}>{desc}</Body3>
      <DataRow>
        <Items>
          <LinkdeinIcon style={{ marginRight: "20px" }} />
          <WebIcon />
        </Items>
        <Items>
          <Price>{price}</Price>
          <Caption>per hour</Caption>
        </Items>
      </DataRow>
      <MeetingButton label="Set a meeting" to="/expert" />
    </Container>
  );
}
const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 358px;
  height: auto;
`;
const Ring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 110px;
  border: 3px solid var(--primary-color-light);
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-bottom: 20px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;

  div {
    border-radius: 50%;
  }
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
const Price = styled(Body2)`
  color: var(--text-color-dark);
  margin-right: 4px;
`;
const MeetingButton = styled(ButtonLink)`
  width: 100% !important;
`;
