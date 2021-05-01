import { Body2, Body3, Caption, Title } from "elements/typo";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import * as yup from "yup";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { TextInput } from "elements/TextInput";
import Checkbox from "elements/CheckBox";
import Button from "elements/Button";
import Link from "next/link";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};
const RegisterSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const checkBoxName = "iAccept";
const RegisterModal = ({ isOpen, setIsOpen }: Props) => {
  const [isSelected, setIsSelected] = useState<Record<string, boolean>>({
    [checkBoxName]: true,
  });
  const handleCheckboxChange = (changeEvent: { target: { name: any } }) => {
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
      <RegisterContainer>
        <Markers>
          <StepMarker
            isActive={true}
            style={{ borderRadius: "20px 0px 0px 0px" }}
          />

          <StepMarker style={{ borderRadius: "0px 20px 0px 0px" }} />
        </Markers>
        <CloseButton onClick={() => setIsOpen(false)}> &times;</CloseButton>
        <Caption style={{ marginBottom: "1rem" }}>1 of 2</Caption>
        <Title
          style={{ marginBottom: "1.5rem", color: "var(--primary-color-dark)" }}
        >
          Welcome to Morsid
        </Title>
        <Body2 style={{ marginBottom: "2rem" }}>
          For booking a meeting with our experts, Please sign up!
        </Body2>

        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={async (values) => {
            toast.success("navid values");
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

              <Checkbox
                label={
                  <Body3
                    style={{ display: "inline-block", marginBottom: "40px" }}
                  >
                    I agree to the{" "}
                    <span style={{ borderBottom: "1px solid" }}>
                      terms, conditions and privacy policy
                    </span>
                  </Body3>
                }
                isSelected={isSelected["iAccept"]}
                changeHandler={handleCheckboxChange}
                name={checkBoxName}
              />
              <CTA label="Create an account" />
            </StyledForm>
          )}
        </Formik>
        <Body2 style={{ color: "var(--text-color-dark)" }}>
          If you have an account, please{" "}
          <span style={{ color: "var(--primary-color-dark)" }}>{` Login`}</span>
        </Body2>
      </RegisterContainer>
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
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 745px;
  height: auto;
  background: #ffffff;
  border-radius: 20px;
  padding-bottom: 68px;
`;
const Markers = styled.div`
  display: flex;
  width: 100%;
  height: 1rem;
  margin-bottom: 0.5rem;
`;
const StepMarker = styled.div<{ isActive?: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ isActive }) =>
    isActive ? "var(--primary-color-normal)" : "var(--border-color-normal)"};
`;
const CloseButton = styled.button`
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
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
const CTA = styled(Button)`
  width: 195px;
  height: 54px;
  margin-bottom: 40px;
`;
