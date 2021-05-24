import Button from "elements/Button";
import "reactjs-popup/dist/index.css";
import styled from "styled-components";
import { Body2, Body3, Caption, Title } from "elements/typo";
import * as yup from "yup";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { TextInput } from "elements/TextInput";
import Checkbox from "elements/CheckBox";
import axios from "axios";
import Router from "next/router";
import { useEffect, useState } from "react";
import { LoginReqError } from "pages/api/users/login";
import { GetYapValidationOfPassWord } from "utils/other";
import { modalsContext } from "contexts/modalContext";
import { useContext } from "react";

interface FormValues {
  email: string;
  password: string;
  isRemember: boolean;
}
const initialValues: FormValues = {
  email: "",
  password: "",
  isRemember: false,
};
const LoginSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
  password: GetYapValidationOfPassWord(),
  isRemember: yup.bool().required(),
});

const checkBoxName = "RememberMe";

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<"LOGIN" | "FORGET">>;
}

const LoginModal = ({ setStatus }: Props) => {
  const { setRegisterModal } = useContext(modalsContext);

  const [isSelected, setIsSelected] = useState<Record<string, boolean>>({
    [checkBoxName]: initialValues.isRemember,
  });
  const handleCheckboxChange = () => {
    setIsSelected({ RememberMe: !isSelected[checkBoxName] });
  };

  return (
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
        onSubmit={(values, { resetForm }) => {
          axios
            .post("/api/users/login/", values)
            .then(() => Router.reload())
            .catch((e) => {
              const responseError: LoginReqError = e?.response?.data;
              toast.error(responseError.error);
              resetForm();
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
                      color: "var(--color-text1)",
                    }}
                  >
                    Remember me
                  </Body3>
                }
                isSelected={isSelected["RememberMe"]}
                changeHandler={handleCheckboxChange}
                name={checkBoxName}
              />
              <Body3
                style={{ cursor: "pointer" }}
                onClick={() => setStatus("FORGET")}
              >
                I forgot my password
              </Body3>
            </Row>
            <CTA label="Login" type="submit" disabled={isSubmitting} />
          </StyledForm>
        )}
      </Formik>
      <Body2 style={{ color: "var(--color-text1)" }}>
        Don’t have a Morsid account yet?
        <span
          onClick={() => {
            setRegisterModal(true);
          }}
          style={{ color: "var(--primary-color-dark)", cursor: "pointer" }}
        >{` Sign up`}</span>
      </Body2>
    </LoginContainer>
  );
};
export default LoginModal;

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
