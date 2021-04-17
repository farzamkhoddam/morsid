import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import { EXPERT_LIST } from "../../consts/experts";

import ButtonLink from "elements/ButtonLink";

export default function Experts() {
  return (
    <Container>
      <Cards>
        {EXPERT_LIST.map((expert) => (
          <ExpertCard
            name={expert.name}
            desc={expert.cartDesc}
            imageUrl={expert.imageUrl}
            price={expert.price}
            slug={expert.slug}
            linkdinAddress={expert?.linkdinAddress}
            websiteAddress={expert?.websiteAddress}
          />
        ))}
      </Cards>
      {/* <SeeMore label="See More" border={true} to="/experts" /> */}
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
