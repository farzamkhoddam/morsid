import React from "react";
import styled from "styled-components";
import { Body3, H3 } from "elements/typo";
import Card from "components/Card";

import ButtonLink from "elements/ButtonLink";

export default function Experts() {
  return (
    <Container>
      <H3 style={{ margin: "0 auto" }}>Our Experts</H3>
      <Body3 style={{ margin: "12px auto 56px auto" }}>
        Get help our experts about how to scale your company fast and in
        effective way
      </Body3>
      <Cards>
        <ExpertCard
          name="Navid Goalpure"
          desc="I've been the CEO of Dropbox for more than 3 years now. I can help you
        to grow your business."
          imageUrl="/images/experts/hamid.jpg"
          price="$617"
        />
        <ExpertCard
          name="Navid Goalpure"
          desc="I've been the CEO of Dropbox for more than 3 years now. I can help you
        to grow your business."
          imageUrl="/images/experts/hamid.jpg"
          price="$617"
        />
        <ExpertCard
          name="Navid Goalpure"
          desc="I've been the CEO of Dropbox for more than 3 years now. I can help you
        to grow your business."
          imageUrl="/images/experts/hamid.jpg"
          price="$617"
        />
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
