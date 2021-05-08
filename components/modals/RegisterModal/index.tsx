import { StyledPopup, CloseButton } from "elements/Modal";
import Router from "next/router";
import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const RegisterModal = ({ isOpen, setIsOpen }: Props) => {
  const [step, setStep] = useState<1 | 2 | 3>(2);
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
