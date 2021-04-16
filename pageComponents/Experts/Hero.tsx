import React from "react";
import Button from "elements/Button";
import styled from "styled-components";
import { Body1, H2 } from "elements/typo";
import Image from "next/image";

export default function Hero() {
  return (
    <Sides>
      <Side1>
        <H2 style={{ marginTop: "1rem" }}>Find experienced people</H2>
        <Sentence>
          <H2 style={{ marginRight: "12px" }}>Set</H2>
          <Underline>
            <H2>meetings</H2>
            <div style={{ content: "url(/svgs/arc.svg)" }}></div>
          </Underline>
          <H2>with them</H2>
        </Sentence>
        <Body1 style={{ margin: "25px 0 32px 0" }}>
          Get in touch with the experts to start or grow your startup
        </Body1>
        <Button label="Find an Expert" />
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
`;
const Side1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Sentence = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Underline = styled.div`
  margin-right: 12px;
`;
const Side2 = styled.div`
  flex: 1;
`;
