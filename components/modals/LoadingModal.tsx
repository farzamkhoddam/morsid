// فعلا استفاده از این کامپوننت توی کنسول ارری نشون میده که باعث میشه کار نکنه. سر فرصت باید دیباگ بشه
import Loading from "components/loading";
import { CloseButton, StyledPopup } from "elements/Modal";
import Router from "next/router";
import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const LoadingModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <StyledPopup
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      position="right center"
      modal
      lockScroll
    >
      <CloseButton
        onClick={() => {
          setIsOpen(false);
        }}
      >
        &times;
      </CloseButton>
      <LoginContainer>
        <Loading />
      </LoginContainer>
    </StyledPopup>
  );
};
export default LoadingModal;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 745px;
  height: auto;
  background: #ffffff;
  border-radius: 20px;
  padding: 56px;
  padding-bottom: 68px;
`;
