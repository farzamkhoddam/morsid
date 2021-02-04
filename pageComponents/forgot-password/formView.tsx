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
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const LoginSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
  password: yup.string().min(8).label("Password").required(),
});

export default function LoginForm() {
  const router = useRouter();
  const [loginFailed, setLoginFailed] = useState(false);

  useEffect(() => {
    if (loginFailed) {
      toast.error("Wrong email or password");
      // این رو فالس میکنیم که با هر بار ری رندر شدن کامپوننت، این اخطار نشون داده نشه
      setLoginFailed(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginFailed]);
  return (
    <FormContainer>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            setLoginFailed(false);
            try {
              await axios.post("/api/users/login", values);
              const res = await axios.post<{ user: { subscribed: boolean } }>(
                "/api/users/me",
              );
              setUserData(res.data.user.subscribed);
              router.push("/account");
            } catch {
              setLoginFailed(true);
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
              <TextInput
                name="password"
                type="password"
                placeholder="Password"
              />
              {/* <ButtonsContainer>
                <ResponsiveContainer>
                  <button
                    className="button"
                    disabled={isSubmitting}
                    type="submit"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Login
                  </button>
                </ResponsiveContainer>
                <SignButtom title="Sign Up" to={"/signup"} viewType="glow" />
              </ButtonsContainer> */}
              <SignInButton
                value="SIGN IN"
                type="submit"
                disabled={isSubmitting}
              />
              <SignupContainer>
                <SignUDesc>{`if you haven't an account, please`}</SignUDesc>
                <Link href="/signup">
                  <SignUpClickable>Sign Up</SignUpClickable>
                </Link>
              </SignupContainer>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </FormContainer>
  );
}
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const FormWrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  width: 100%;
  padding-left: 2rem;
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

const SignupContainer = styled.div`
  display: flex;
  align-items: center;
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
const SignUDesc = styled.div`
  margin-right: 0.5rem;
`;
const SignUpClickable = styled.span`
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
