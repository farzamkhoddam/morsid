import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import { device } from "consts/theme";

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

export default function SignupForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[] | null>();

  return (
    <FormContainer>
      <FormWrapper>
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
              await axios.post("/api/users/register", { json: values });
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
          {() => (
            <Form>
              <SignupTextInput name="firstName" placeholder="firstName" />
              <SignupTextInput name="lastName" placeholder="Last Name" />
              <SignupTextInput
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <SignupTextInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <SignupTextInput
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />

              <SignUpButton title="SIGN UP" type="normal" />

              <SigninContainer>
                <SigninDesc>if you have an account, please</SigninDesc>
                <SigninClickable>Sign in</SigninClickable>
              </SigninContainer>
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

const SignupTextInput = styled(TextInput)`
  @media ${device.laptop} {
    input {
    }
  }
`;

const SigninContainer = styled.div`
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
const SigninDesc = styled.div`
  margin-right: 0.5rem;
`;
const SigninClickable = styled.span`
  color: var(--accent-color-normal);
  border-bottom: solid 1px;
`;

const SignUpButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  width: 264px;
  height: 64px;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
