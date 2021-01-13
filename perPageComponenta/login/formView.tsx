import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import { useState } from "react";
import styled from "styled-components";
import { setUserData } from "utils/auth-storage";
import Button from "components/Button";
import { device } from "consts/theme";

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
  return (
    <FormContainer>
      <FormWrapper>
        <div className="wrapper">
          <section className="article-header">
            <H1>Login</H1>
          </section>
        </div>
        {loginFailed ? (
          <div>
            <div>{"Wrong email or password"}</div>
          </div>
        ) : null}
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            setLoginFailed(false);
            try {
              await axios.post("/api/users/login", { json: values });
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
            <Form className="contact-form wrapper">
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
                <SignButtom title="Sign Up" to={"/signup"} type="glow" />
              </ButtonsContainer> */}
              <SignInButton title="SIGN UP" type="normal" />
              <SignupContainer>
                <SignUDesc>{`if you haven't an account, please`}</SignUDesc>
                <SignUpClickable>Sign Up</SignUpClickable>
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
  @media ${device.tablet} {
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
  @media ${device.laptop} {
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
const H1 = styled.h1`
  color: var(--primary-color-normal);
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
  color: #4f4f4f;
  margin-top: 2rem;
  @media ${device.laptop} {
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
const SignUDesc = styled.div`
  margin-right: 0.5rem;
`;
const SignUpClickable = styled.span`
  color: var(--accent-color-normal);
  border-bottom: solid 1px;
`;

const SignInButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  width: 264px;
  height: 64px;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
