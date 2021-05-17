import { Body2, Title } from "elements/typo";
import React from "react";

import styled from "styled-components";
import SuccesIcon from "./SuccessIcon";

const Step3 = () => {
  return (
    <RegisterContainer>
      <SuccesIcon style={{ marginBottom: "2rem" }} />
      <Title style={{ marginBottom: "20px", color: "var(--color-text1)" }}>
        Congratulations
      </Title>
      <Body2>Your account has been successfully created!</Body2>
    </RegisterContainer>
  );
};
export default Step3;
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  width: 745px;
  height: auto;
  width: 522px;
  background: #ffffff;
  border-radius: 20px;
  padding-bottom: 68px;
  padding:56px;
`;
