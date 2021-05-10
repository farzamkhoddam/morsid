import React from "react";
import styled from "styled-components";
import { Body3, H3 } from "elements/typo";
import Card from "components/Card";

import ButtonLink from "elements/ButtonLink";
import { Expert, EXPERT_LIST } from "consts/experts";

interface Props {
  currentExpert: Expert;
  isLogin: boolean;
}

export default function Experts({ currentExpert, isLogin }: Props) {
  return (
    <Container>
      <H3 style={{ margin: "0 auto 2.5rem " }}>
        You can also choose from other experts
      </H3>

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
