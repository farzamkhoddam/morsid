import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import ky from "ky/umd";
import * as yup from "yup";
import { useState } from "react";
import SimplePageHeader from "components/simplePageHeader";
import styled from "styled-components";

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

export default function Signup() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[] | null>();
  return (
    <div className="account-page">
      <SimplePageHeader />
      <Container>
        <div className="wrapper">
          <section className="article-header">
            <H1>Signup</H1>
          </section>
        </div>
        {errors && errors.length > 0 ? (
          <div>
            {errors.map((err) => (
              <div key={err}>{err}</div>
            ))}
          </div>
        ) : null}
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            setErrors(null);
            try {
              await ky.post("/api/users/register", { json: values }).json();
              router.push("/login");
            } catch (e) {
              if (
                e.name === "HTTPError" &&
                e.response.status < 500 &&
                e.response.status >= 400
              ) {
                const { errors } = await e.response.json();
                setErrors(errors);
              }
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="contact-form wrapper">
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
  color: var(--secondary-color-light);
`;
