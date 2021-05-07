import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

import toast from "react-hot-toast";
import { GetYapValidationOfPassWord } from "utils/other";
import React, { useEffect } from "react";
import { TextInput } from "elements/TextInput";
import PageLayout from "components/PageLayout";
import { Body1, Caption } from "elements/typo";
import Button from "elements/Button";

interface FormValues {
  uid: string;
  token: string;
  new_password: string;
  confirm_password: string;
}
const initialValues: Partial<FormValues> = {
  new_password: "",
  confirm_password: "",
};

const LoginSchema = yup.object().shape({
  new_password: GetYapValidationOfPassWord(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("new_password"), ""], "Passwords must match"),
});
export default function ResetPassword() {
  const router = useRouter();
  const { uid, token } = router.query;

  // if (Object.keys(router.query).length > 0 && (!uid || !token)) {

  //   setTimeout(function () {
  //     router.push("/");
  //   }, 3000);
  //   toast.error("This link is wrong!");
  // }
  useEffect(() => {
    if (Object.keys(router.query).length > 0)
      axios
        .post("/api/users/reset-password-validation", {
          uid,
          token,
        })
        .catch(() => {
          toast.error("Sorry, your link is wrong!");
          setTimeout(function () {
            router.push("/");
          }, 3000);
        });
  }, [router.query]);

  return (
    <PageLayout isLogin={false}>
      <Body1 style={{ color: "var(--text-color-dark)", marginTop: "2rem" }}>
        Please enter your new password
      </Body1>
      <FormContainer>
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
              axios
                .post("/api/users/reset_password_confirm", {
                  new_password: values.new_password,
                  uid,
                  token,
                })
                .then(() => {
                  toast.success("Your password was changed successfully");
                  setTimeout(function () {
                    router.push("/");
                  }, 3000);
                })
                .catch(() => {
                  toast.error(
                    "Sorry, your password change operation was failed!",
                  );
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Row>
                  <div style={{ marginRight: "29px" }}>
                    <Caption as="label" htmlFor={"name"}>
                      New password
                    </Caption>
                    <TextInput
                      name="new_password"
                      type="password"
                      placeholder="At least 8 character or more"
                      style={{ width: "358px" }}
                    />
                  </div>
                  <div>
                    <Caption as="label" htmlFor={"name"}>
                      Confirm new password
                    </Caption>
                    <TextInput
                      name="confirm_password"
                      type="password"
                      placeholder="Type your password again"
                      style={{ width: "358px" }}
                    />
                  </div>
                </Row>
                <SaveButton
                  label="Save"
                  type="submit"
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </FormContainer>
    </PageLayout>
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
`;

const SaveButton = styled(Button)`
  width: 83px;
  height: 46px;
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
