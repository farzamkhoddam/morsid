import React from "react";
import styled from "styled-components";
import { Body3, H3 } from "elements/typo";
import Card from "components/Card";

import ButtonLink from "elements/ButtonLink";
import { EXPERT_LIST } from "consts/experts";

export default function Experts() {
  return (
    <Container>
      <H3 style={{ margin: "0 auto" }}>Our Experts</H3>
      <Body3 style={{ margin: "12px auto 56px auto" }}>
        Get help our experts about how to scale your company fast and in
        effective way
      </Body3>
      <Cards>
        {EXPERT_LIST.map((expert) => (
          <ExpertCard
            name={expert.name}
            desc={expert.cartDesc}
            imageUrl={expert.imageUrl}
            price={expert.price}
            slug={expert.slug}
          />
        ))}
      </Cards>
      <SeeMore label="See More" border={true} to="/experts" />
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 82px;
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4rem;
`;
const ExpertCard = styled(Card)`
  width: 32%;
`;
const SeeMore = styled(ButtonLink)`
  margin: 0 auto;
  margin-bottom: 120px;
`;
