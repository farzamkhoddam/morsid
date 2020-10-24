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
    <MainLayout title="Signup">
      <div className="featured-banner">
        <section className="article-header">
          <h1>Signup</h1>
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
          <Form>
            <TextInput name="firstName" placeholder="First Name" />
            <TextInput name="lastName" placeholder="Last Name" />
            <TextInput name="email" type="email" placeholder="Email Address" />
            <TextInput name="password" type="password" placeholder="Password" />
            <TextInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </MainLayout>
  );
}
