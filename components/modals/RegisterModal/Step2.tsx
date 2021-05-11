import { Body2, Body3, Caption, Title } from "elements/typo";
import React, { useState } from "react";

import "reactjs-popup/dist/index.css";
import * as yup from "yup";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { TextInput } from "elements/TextInput";
import Button from "elements/Button";
import axios from "axios";

interface FormValues {
  first_name: string;
  last_name: string;
  phone_number: string;
}

const initialValues: FormValues = {
  first_name: "",
  last_name: "",
  phone_number: "",
};
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const RegisterSchema = yup.object().shape({
  first_name: yup.string(),
  last_name: yup.string(),
  phone_number: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
interface Props {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}
const Step2 = ({ setStep }: Props) => {
  return (
    <RegisterContainer>
      <Markers>
        <StepMarker style={{ borderRadius: "20px 0px 0px 0px" }} />

        <StepMarker
          isActive={true}
          style={{ borderRadius: "0px 20px 0px 0px" }}
        />
      </Markers>

      <Caption style={{ marginBottom: "1rem" }}>2 of 2</Caption>
      <Title
        style={{ marginBottom: "1.5rem", color: "var(--primary-color-dark)" }}
      >
        We want to know you better
      </Title>
      <Body2 style={{ marginBottom: "2rem" }}>
        We will need some more information to complete your profile
      </Body2>

      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={async (values) => {
          axios
            .post("/api/users/update-profile/", values)
            .then(() => setStep(3))
            .catch((e) => {
              toast.error("Someting went wrong!");
            });
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Column>
              <Flex1>
                <Caption as="label" htmlFor={"first_name"}>
                  First name
                </Caption>
                <TextInput
                  name="first_name"
                  type="text"
                  placeholder="e.g Jimmy"
                />
              </Flex1>
              <Flex1>
                <Caption as="label" htmlFor={"last_name"}>
                  Last name
                </Caption>
                <TextInput
                  name="last_name"
                  type="text"
                  placeholder="e.g Heller"
                />
              </Flex1>
              <Flex1>
                <Caption as="label" htmlFor={"phone_number"}>
                  Phone number
                </Caption>
                <TextInput
                  name="phone_number"
                  type="text"
                  placeholder="+123456789"
                />
              </Flex1>
              <Buttons>
                <Body3 style={{ cursor: "pointer" }} onClick={() => setStep(1)}>
                  Skip for now
                </Body3>
                <Button label="Complete profile" type="submit" />
              </Buttons>
            </Column>
          </StyledForm>
        )}
      </Formik>
    </RegisterContainer>
  );
};
export default Step2;
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
  width: 358px;
`;

const Flex1 = styled.div`
  flex: 1;
  width: 100%;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
