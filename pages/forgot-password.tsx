import AuthenticationLayout from "components/AuthenticationLayout";

import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { setUserData } from "utils/auth-storage";
import { device } from "consts/theme";
import Link from "next/link";
import toast from "react-hot-toast";

interface FormValues {
  email: string;
}

const initialValues: FormValues = {
  email: "",
};

const LoginSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
});

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <AuthenticationLayout title="Enter your email, we'll send you a link to reset your password.">
      <FormContainer>
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
              try {
                await axios.post(
                  "/api/users/send-password-reset-email",
                  values,
                );
                router.push("/login");
                toast.success("Please check your email inbox");
              } catch {
                toast.error("Somthing went wrong!");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
                <SignInButton
                  value="SEND"
                  type="submit"
                  disabled={isSubmitting}
                />
                <SigninContainer>
                  <SigninDesc>
                    if you have an account, please{" "}
                    <Link href="/login">
                      <SigninClickable>Sign in</SigninClickable>
                    </Link>
                  </SigninDesc>
                </SigninContainer>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </FormContainer>
    </AuthenticationLayout>
  );
}
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const FormWrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  @media ${device.laptopXS} {
    padding-top: 0rem;
  }
  @media ${device.mobileL} {
    display: flex;
    justify-content: center;
    margin-right: 0;
    padding: 0;
  }
  form {
    @media ${device.mobileL} {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

const SigninContainer = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  margin-right: 0.5rem;
  color: var(--gray-color-normal);
  margin-top: 2rem;
  @media ${device.laptopXS} {
    font-size: 16px;
    letter-spacing: 0.03em;
    padding-bottom: 1rem;
  }
  @media (max-width: 700px) {
    font-size: 3.3vw;
  }
  @media ${device.mobileL} {
    font-size: 3.8vw;
  }
`;
const SigninDesc = styled.p`
  margin: 0;
`;
const SigninClickable = styled.span`
  color: var(--accent-color-normal);
  border-bottom: solid 1px;
  cursor: pointer;
`;

const SignInButton = styled.input`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 264px;
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
  background: var(--accent-color-normal);
  color: var(--primary-color-normal);
  border-radius: 1px;
  text-decoration: none;
  appearance: none;
  border: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  transition: background 0.3s linear;
  &.-outline {
    color: var(--primary-color-dark);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
    background: #fff;
    &:hover {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
      background: #f2f2f2;
    }
  }
  & + .button {
    margin-left: 20px;
  }
  .icon {
    display: inline-flex;
    &.-right {
      margin-left: var(--margin);
    }
    &.-left {
      margin-right: var(--margin);
    }
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
