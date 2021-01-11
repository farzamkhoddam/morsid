import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import { useState } from "react";
import styled from "styled-components";
import SimplePageHeader from "components/simplePageHeader";
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

export default function Login() {
  const router = useRouter();
  const [loginFailed, setLoginFailed] = useState(false);
  return (
    <div className="account-page">
      <SimplePageHeader />
      <Container>
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
              <ButtonsContainer>
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
              </ButtonsContainer>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 16rem);
  width: 100%;
`;
const H1 = styled.h1`
  color: var(--primary-color-normal);
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media ${device.mobileM} {
    flex-direction: column;
  }
`;
const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0.5rem;
  min-width: 10rem;
  @media ${device.mobileM} {
    width: 100%;
    margin: 0.5rem 0;
  }
`;
const SignButtom = styled(Button)`
  color: var(--primary-color-dark);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  background: #fff;
  margin: 0 0.5rem;
  width: 10rem;
  @media ${device.mobileM} {
    width: 100%;
    margin: 0.5rem 0;
  }
`;
