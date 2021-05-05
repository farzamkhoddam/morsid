import Button from "elements/Button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styled from "styled-components";
import { Body2, Body3, Caption, Title } from "elements/typo";
import React, { Dispatch, useContext, useState } from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { TextInput } from "elements/TextInput";
import Checkbox from "elements/CheckBox";
import axios from "axios";
import Router from "next/router";

interface FormValues {
  email: string;
  password: string;
}
const initialValues: FormValues = {
  email: "",
  password: "",
};
const LoginSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const checkBoxName = "RememberMe";

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const LoginModal = ({ isOpen, setIsOpen }: Props) => {
  const [isSelected, setIsSelected] = useState<Record<string, boolean>>({
    [checkBoxName]: false,
  });
  const handleCheckboxChange = () => {
    setIsSelected({ [checkBoxName]: !isSelected[checkBoxName] });
  };
  return (
    <StyledPopup
      open={isOpen}
      onClose={() => setIsOpen(false)}
      position="right center"
      modal
      lockScroll
    >
      <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
      <LoginContainer>
        <Title
          style={{ marginBottom: "1.5rem", color: "var(--primary-color-dark)" }}
        >
          Welcome back to Morsid
        </Title>
        <Body2 style={{ marginBottom: "2rem" }}>
          Please login to access your account
        </Body2>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            try {
              await axios.post("/api/users/login/", values);
              Router.reload();
            } catch (e) {
              e.error.map((error: string) => {
                toast.error(error);
              });

              console.log("Login Error=", e.response.data);
            }
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
                <Flex1>
                  <Caption as="label" htmlFor={"name"}>
                    Password
                  </Caption>
                  <TextInput
                    name="password"
                    type="password"
                    placeholder="At least 8 character or more"
                  />
                </Flex1>
              </Column>
              <Row>
                <Checkbox
                  label={
                    <Body3
                      style={{
                        display: "inline-block",
                        marginBottom: "2.5rem",
                        color: "var(--text-color-dark)",
                      }}
                    >
                      Remember me
                    </Body3>
                  }
                  isSelected={isSelected["iAccept"]}
                  changeHandler={handleCheckboxChange}
                  name={checkBoxName}
                />
                <Body3 style={{ cursor: "pointer" }}>
                  I forgot my password
                </Body3>
              </Row>
              <CTA
                label="Login to account"
                type="submit"
                disabled={isSubmitting}
              />
            </StyledForm>
          )}
        </Formik>
        <Body2 style={{ color: "var(--text-color-dark)" }}>
          If you haven’t an account, please
          <span
            style={{ color: "var(--primary-color-dark)" }}
          >{` Sign up`}</span>
        </Body2>
      </LoginContainer>
    </StyledPopup>
  );
};
export default LoginModal;
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
const Row = styled.div`
  display: flex;
  justify-content: space-between;
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
