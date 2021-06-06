import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import { EXPERT_LIST } from "../../consts/experts";

import ButtonLink from "elements/ButtonLink";
import { device } from "consts/device";

interface Props {
  isLogin: boolean;
}

export default function Experts({ isLogin }: Props) {
  return (
    <Container>
      <Cards>
        {EXPERT_LIST.map((expert) => (
          <ExpertCard
            key={expert.slug}
            name={expert.name}
            desc={expert.cartDesc}
            imageUrl={expert.imageUrl}
            price={expert.price}
            slug={expert.slug}
            linkdinAddress={expert?.linkdinAddress}
            websiteAddress={expert?.websiteAddress}
            isLogin={isLogin}
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
  margin-top: 2.2rem;
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4rem;
  @media ${device.tabletL} {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
const ExpertCard = styled(Card)`
  width: 32%;
  margin-top: 1.5rem;
  @media ${device.tabletL} {
    width: 47%;
    margin: 1.2rem 1rem;
  }
  @media ${device.tabletM} {
    width: 70%;
  }
  @media ${device.mobileL} {
    width: 100%;
    max-width: 100%;
  }
`;
