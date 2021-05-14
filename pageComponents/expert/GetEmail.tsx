import * as React from "react";
import styled from "styled-components";
import { Body1, Body2 } from "elements/typo";
import { Paper } from "elements/Layout";
import { STEP } from ".";
import { Expert } from "consts/experts";
import Avatar from "components/Avatar";
import GetEmailImage from "./GetEmailImage";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<STEP>>;
  currentExpert: Expert;
}

export default function GetEmail({ setStep, currentExpert }: Props) {
  return (
    <Container>
      <Paper style={{ marginBottom: "256px" }}>
        <Avatar
          alt={currentExpert.name}
          imageUrl={currentExpert.imageUrl}
          // style={{ marginBottom: "20px" }}
          slug={currentExpert.slug}
        />
        <Body1
          style={{
            color: "var(--primary-color-dark)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >{`Set a meeting with ${currentExpert.name}`}</Body1>
        <FlexContainer>
          <GetEmailImage />
        </FlexContainer>
        <FlexContainer>
          <Body1 style={{ width: "315px", color: "var(--color-text1)" }}>
            Your meeting was successfully set You'll get information via email
          </Body1>
        </FlexContainer>
      </Paper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 2.5rem;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-text1);
`;
