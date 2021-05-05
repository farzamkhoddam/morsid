import Router from "next/router";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styled from "styled-components";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const RegisterModal = ({ isOpen, setIsOpen }: Props) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  let correctStep = <div />;
  switch (step) {
    case 1:
      correctStep = <Step1 setStep={setStep} />;
      break;
    case 2:
      correctStep = <Step2 setStep={setStep} />;
      break;
    case 3:
      correctStep = <Step3 />;
      break;

    default:
      break;
  }
  return (
    <StyledPopup
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        Router.reload();
      }}
      position="right center"
      modal
      lockScroll
    >
      <CloseButton
        onClick={() => {
          setStep(1);
          setIsOpen(false);
        }}
      >
        &times;
      </CloseButton>
      {correctStep}
    </StyledPopup>
  );
};
export default RegisterModal;
const StyledPopup = styled(Popup)`
  &-overlay {
  }
  &-content {
    width: max-content;
    border-radius: 20px;
    padding: 0;
  }
`;

const CloseButton = styled.button`
  outline: none;
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: 10px;
  top: 20px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: none;
  color: var(--text-color-normal);
`;
