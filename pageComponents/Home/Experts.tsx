import React from "react";
import styled from "styled-components";
import { Body3, H3 } from "elements/typo";
import Card from "components/Card";

import ButtonLink from "elements/ButtonLink";
import { EXPERT_LIST } from "consts/experts";
import { device } from "consts/device";
interface Props {
  isLogin: boolean;
}

export default function Experts({ isLogin }: Props) {
  return (
    <Container>
      <H3 style={{ margin: "0 auto" }}>Our Experts</H3>
      <StyledP style={{ margin: "12px auto 56px auto" }}>
        Get help our experts about how to scale your company fast and in
        effective way
      </StyledP>
      <Cards>
        {EXPERT_LIST.map((expert) => (
          <ExpertCard
            key={expert.slug}
            name={expert.name}
            desc={expert.cartDesc}
            imageUrl={expert.imageUrl}
            price={expert.price}
            slug={expert.slug}
            isLogin={isLogin}
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
const StyledP = styled(Body3)`
  @media ${device.tabletL} {
    text-align: center;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4rem;
  @media ${device.tabletL} {
    flex-direction: column;
    align-items: center;
  }
`;
const ExpertCard = styled(Card)`
  width: 32%;
  @media ${device.tabletL} {
    width: 50%;
    margin-bottom: 2rem;
  }
  @media ${device.tabletL} {
    width: 85%;
  }
`;
const SeeMore = styled(ButtonLink)`
  margin: 0 auto;
  margin-bottom: 120px;
`;
