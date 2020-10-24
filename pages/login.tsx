import { MainLayout } from "layouts/MainLayout";
import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import ky from "ky/umd";
import * as yup from "yup";
import { useState } from "react";

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
    <MainLayout title="Login">
      <div className="featured-banner">
        <section className="article-header">
          <h1>Login</h1>
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
            router.push("/");
          } catch {
            setLoginFailed(true);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput name="email" type="email" placeholder="Email Address" />
            <TextInput name="password" type="password" placeholder="Password" />
            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </MainLayout>
  );
}
