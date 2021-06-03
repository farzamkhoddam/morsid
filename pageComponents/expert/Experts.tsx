import React from "react";
import styled from "styled-components";
import { Body3, H3 } from "elements/typo";
import Card from "components/Card";

import ButtonLink from "elements/ButtonLink";
import { Expert, EXPERT_LIST } from "consts/experts";
import { device } from "consts/device";

interface Props {
  currentExpert: Expert;
  isLogin: boolean;
}

export default function Experts({ currentExpert, isLogin }: Props) {
  return (
    <Container>
      <StyledH3>You can also choose from other experts</StyledH3>

      <Cards>
        {EXPERT_LIST.map((expert) => {
          if (currentExpert?.slug !== expert?.slug)
            return (
              <ExpertCard
                key={expert.slug}
                name={expert.name}
                desc={expert.cartDesc}
                imageUrl={expert.imageUrl}
                price={expert.price}
                slug={expert.slug}
                isLogin={isLogin}
              />
            );
        })}
      </Cards>
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 82px;
`;
const StyledH3 = styled(H3)`
  margin: 0 auto 2.5rem;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 22px;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4rem;

  @media ${device.mobileL} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const ExpertCard = styled(Card)`
  width: 32%;
  @media ${device.tabletL} {
    width: 49%;
  }
  @media ${device.mobileL} {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;
const SeeMore = styled(ButtonLink)`
  margin: 0 auto;
  margin-bottom: 120px;
`;
