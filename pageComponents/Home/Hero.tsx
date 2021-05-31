import React from "react";
import styled from "styled-components";
import { Body1, H2 } from "elements/typo";
import Image from "next/image";
import ButtonLink from "elements/ButtonLink";
import { device } from "consts/device";

export default function Hero() {
  return (
    <Sides>
      <Side1>
        <Title style={{ marginTop: "1rem" }}>Find experienced people</Title>
        <Sentence>
          <StyledH2 style={{ marginRight: "12px" }}>Set</StyledH2>
          <Underline>
            <BlueH2>meetings</BlueH2>
            <Line style={{ content: "url(/svgs/arc.svg)" }}></Line>
          </Underline>
          <StyledH2>with them</StyledH2>
        </Sentence>
        <StyledBody1 style={{ margin: "25px 0 32px 0" }}>
          Get in touch with the experts to start or grow your startup
        </StyledBody1>
        <ButtonLink label="Find an Expert" to="/experts" />
      </Side1>
      <Side2>
        <Image
          src="/images/meetup.png"
          alt="meetup"
          width={566}
          height={379}
          quality={100}
        />
      </Side2>
    </Sides>
  );
}
const Sides = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${device.tabletL} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const Side1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media ${device.tabletL} {
    align-items: center;
    justify-content: center;
  }
`;
const Title = styled(H2)`
  @media ${device.tabletL} {
    font-size: 38px;
    text-align: center;
    @media ${device.mobileL} {
      line-height: 54px;
    }
  }
`;
const Sentence = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.mobileL} {
    margin-top: 1rem;
    justify-content: center;
  }
`;
const StyledH2 = styled(H2)`
  @media ${device.tabletL} {
    font-size: 38px;
  }
`;
const BlueH2 = styled(StyledH2)`
  @media ${device.mobileL} {
    color: var(--primary-color-dark);
  }
`;
const Underline = styled.div`
  margin-right: 12px;
  @media ${device.tabletL} {
    margin: 0;
    width: 10.5rem;
  }
`;
const Line = styled.div`
  width: 80%;
  @media ${device.mobileL} {
    display: none;
  }
`;
const Side2 = styled.div`
  flex: 1;
  @media ${device.tabletL} {
    width: fit-content;
  }
`;
const StyledBody1 = styled(Body1)`
  @media ${device.tabletL} {
    text-align: center;
  }
`;
