import { Body2, Title } from "elements/typo";
import React from "react";

import styled from "styled-components";
import SuccesIcon from "./SuccessIcon";

const Step3 = () => {
  return (
    <RegisterStep3Container>
      <SuccesIcon style={{ marginBottom: "2rem" }} />
      <Title style={{ marginBottom: "20px", color: "var(--color-text1)" }}>
        Congratulations
      </Title>
      <StyledBody2>Your account has been successfully created!</StyledBody2>
    </RegisterStep3Container>
  );
};
export default Step3;
const RegisterStep3Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  height: auto;
  width: 100%;
  max-width: 522px;
  background: #ffffff;
  border-radius: 20px;
  padding-bottom: 68px;
  padding:56px;
  margin: 0 auto;
`;
const StyledBody2 = styled.div`
  text-align: center;
`;
