import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import { device } from "consts/theme";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
};

const SignupSchema = yup.object().shape({
  firstName: yup.string().label("First Name").required(),
  lastName: yup.string().label("Last Name").required(),
  email: yup.string().label("Email Address").email().required(),
  password: yup.string().min(8).label("Password").required(),
  confirmPassword: yup
    .string()
    .min(8)
    .label("Confirm Password")
    .oneOf(
      [yup.ref("password")],
      `Password and Confirm Password does not match`,
    )
    .required(),
});
const snackBarOptions = {
  position: "bottom-right",
  style: {
    backgroundColor: "midnightblue",
    border: "2px solid lightgreen",
    color: "lightblue",
    fontFamily: "Menlo, monospace",
    fontSize: "20px",
    textAlign: "center",
  },
  closeStyle: {
    color: "lightcoral",
    fontSize: "16px",
  },
};
export default function SignupForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[] | null>(null);

  useEffect(() => {
    if (errors && errors.length > 0) {
      errors.map((err) => toast.error(err));
      setErrors(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <FormContainer>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            setErrors(null);
            try {
              await axios.post("/api/users/register", values);
              router.push("/login");
            } catch (e) {
              if (
                // e.name === "HTTPError" &&
                e.response.status < 500 &&
                e.response.status >= 400
              ) {
                const errors = e?.response?.data?.errors || null;
                // const { errors } = await e.response.json();

                setErrors(errors);
              }
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput name="firstName" placeholder="First Name" />
              <TextInput name="lastName" placeholder="Last Name" />
              <TextInput
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <TextInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <TextInput
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />

              <SignUpButton
                value={isSubmitting ? "WAIT..." : "SIGN UP"}
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
  );
}

const FormContainer = styled.div`
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
  margin-top: 1rem;
  @media ${device.laptopXS} {
    font-size: 16px;
    letter-spacing: 0.03em;
    padding-bottom: 1rem;
  }
  @media ${device.tablet} {
    font-size: 3.3vw;
  }
  @media ${device.mobileL} {
    font-size: 3.8vw;
  }
`;
const SigninDesc = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: #4f4f4f;
  margin: 0;
`;
const SigninClickable = styled.span`
  color: var(--accent-color-normal);
  border-bottom: solid 1px;
  cursor: pointer;
`;

const SignUpButton = styled.input<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "wait" : "pointer")};
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 264px;
  height: 58px;
  padding: var(--padding) calc(var(--padding) * 2);
  background:  ${({ disabled }) =>
    disabled ? "var(--gray-color-xlight)" : "var(--accent-color-normal)"};
  }
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
