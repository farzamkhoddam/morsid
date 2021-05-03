import * as React from "react";
import styled from "styled-components";
import { Body1 } from "elements/typo";
import { Paper } from "elements/Layout";
import { STEP } from ".";
import { Expert } from "consts/experts";
import Avatar from "components/Avatar";
import { STEPS } from "./constants";
import { StyledStepper } from "./MaterialUIPickers";
import PersonalInformation from "./PersonalInformation";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<STEP>>;
  currentExpert: Expert;
}

export default function PaymentForm({ setStep, currentExpert }: Props) {
  return (
    <Container>
      <Paper>
        <Avatar
          alt={currentExpert.name}
          imageUrl={currentExpert.imageUrl}
          // style={{ marginBottom: "20px" }}
        />
        <Body1
          style={{
            color: "var(--primary-color-dark)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >{`Set a meeting with ${currentExpert.name}`}</Body1>
        <StyledStepper steps={STEPS} activeStep={2} />
        <PersonalInformation />
      </Paper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 40px;
`;
