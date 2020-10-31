import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import ky from "ky/umd";
import * as yup from "yup";
import { useState } from "react";
import styled from "styled-components";
import SimplePageHeader from "components/simplePageHeader";
import { setUserData } from "utils/auth-storage";

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
              await ky.post("/api/users/login", { json: values }).json();
              const data = await ky
                .post("/api/users/me")
                .json<{ user: { subscribed: boolean } }>();
              setUserData(data.user.subscribed);
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
              <button className="button" disabled={isSubmitting} type="submit">
                Submit
              </button>
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
  color: var(--secondary-color-normal);
`;
