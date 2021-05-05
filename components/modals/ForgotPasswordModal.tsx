import Button from "elements/Button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styled from "styled-components";
import { Body2, Body3, Caption, Title } from "elements/typo";
import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { TextInput } from "elements/TextInput";
import axios from "axios";

interface FormValues {
  email: string;
}
const initialValues: FormValues = {
  email: "",
};
const ForgotSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
});

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const ForgotModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <StyledPopup
      open={isOpen}
      onClose={() => setIsOpen(false)}
      position="right center"
      modal
      lockScroll
    >
      <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
      <Container>
        <Title
          style={{ marginBottom: "1.5rem", color: "var(--primary-color-dark)" }}
        >
          Forgot Password
        </Title>
        <Body2 style={{ marginBottom: "2rem" }}>
          Please enter your email to get the recovery password link
        </Body2>

        <Formik
          initialValues={initialValues}
          validationSchema={ForgotSchema}
          onSubmit={(values) => {
            axios
              .post("/api/users/reset_password/", values)
              .then()
              .catch((e) => {
                e?.response?.data?.error.map((error: string) => {
                  toast.error(error);
                });
              });
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <Column>
                <Flex1>
                  <Caption as="label" htmlFor={"email"}>
                    Email
                  </Caption>
                  <TextInput
                    name="email"
                    type="email"
                    placeholder="e.g jimmy@email.com"
                  />
                </Flex1>
              </Column>

              <CTA label="Send link" type="submit" disabled={isSubmitting} />
            </StyledForm>
          )}
        </Formik>
      </Container>
    </StyledPopup>
  );
};
export default ForgotModal;
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
const Container = styled.div`
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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 358px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 100%;
`;

const Flex1 = styled.div`
  flex: 1;
  width: 100%;
`;
const CTA = styled(Button)`
  width: 195px;
  height: 54px;
  margin-bottom: 2.5rem;
`;
