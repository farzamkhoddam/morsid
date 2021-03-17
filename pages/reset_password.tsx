import AuthenticationLayout from "components/AuthenticationLayout";

import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import { device } from "consts/theme";
import toast from "react-hot-toast";
import ToasterContainer from "components/ToasterContainer";

interface FormValues {
  key: string;
  login: string;
  password: string;
  confirm_password: string;
}
const initialValues: Partial<FormValues> = {
  password: "",
  confirm_password: "",
};

const LoginSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

export default function ResetPassword() {
  const router = useRouter();
  const { key, login } = router.query;
  if (!key || !login) toast.error("This link is wrong!");

  return (
    <AuthenticationLayout title="Choose your new password">
      <ToasterContainer />
      <FormContainer>
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
              try {
                await axios.post("/api/users/reset-password", {
                  ...values,
                  login,
                  key,
                });
                router.push("/");
                toast.success("Your password was changed successfully");
              } catch {
                toast.error(
                  "Sorry, your password change operation was failed!",
                );
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="password"
                  type="password"
                  placeholder="New Password"
                />
                <TextInput
                  name="confirm_password"
                  type="password"
                  placeholder="New Password Confirmation"
                />
                <SignInButton
                  value="SEND"
                  type="submit"
                  disabled={isSubmitting}
                />
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
