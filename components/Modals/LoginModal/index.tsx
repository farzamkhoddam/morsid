import { CloseButton, StyledPopup } from "elements/Modal";
import Router from "next/router";
import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import ForgetPasswordModal from "./ForgotPasswordModal";
import LoginModalComponents from "./LoginModal";

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const LoginModal = ({ isOpen, setIsOpen }: Props) => {
  const [status, setStatus] = useState<"LOGIN" | "FORGET">("LOGIN");

  return (
    <StyledPopup
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        // Router.reload();
      }}
      position="right center"
      modal
      lockScroll
    >
      <CloseButton
        onClick={() => {
          setStatus("LOGIN"); //default
          setIsOpen(false);
        }}
      >
        &times;
      </CloseButton>
      {status === "LOGIN" ? (
        <LoginModalComponents setStatus={setStatus} />
      ) : (
        <ForgetPasswordModal setIsOpen={setIsOpen} />
      )}
    </StyledPopup>
  );
};
export default LoginModal;
