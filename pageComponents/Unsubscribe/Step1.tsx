import Button from "components/Button";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { device } from "consts/theme";
import styled from "styled-components";

import axios from "axios";
import React from "react";
import Stepper from "components/Stepper";
import FormikTextArea from "components/formikTextArea";

interface Props {
  email: string;
  name: string;
}
interface FormValues {
  email: string;
}

const LoginSchema = yup.object().shape({
  Name: yup.string().label("Name").email().required(),
  email: yup.string().label("Email Address").email().required(),
  newPassword: yup.string().min(8).label("New Password").required(),
  lastPassword: yup.string().min(8).label("Last Password").required(),
});
export function Step1({ email, name }: Props) {
  const initialValues: FormValues = {
    email: email,
  };

  return (
    <Container>
      <Wrapper>
        <StyledStepper
          steps={["Feedback", "Details", "Review"]}
          activeStep={3}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            try {
              await axios.post("/api/users/login", values);
              const res = await axios.post<{ user: { subscribed: boolean } }>(
                "/api/users/me",
              );
              console.log("navid success");
            } catch {
              console.log("navid error");
            }
          }}
        >
          {({ isSubmitting }) => (
            <FormWrapper>
              <Form>
                <Section>
                  <H1>Dear Parisa, we’d hate to see you go.</H1>
                  <H2>Why do you want to cancel?</H2>
                  <Checkboxs role="group" aria-labelledby="checkbox-group">
                    <label>
                      <Field
                        type="checkbox"
                        name="why"
                        value="I’ve found an alternative"
                      />
                      {`I’ve found an alternative.`}
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="why"
                        value="I find the material hard to digest"
                      />
                      {`I find the material hard to digest`}
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="why"
                        value="I didn’t implement the playbooks"
                      />
                      {`I didn’t implement the playbooks`}
                    </label>

                    <label>
                      <Field
                        type="checkbox"
                        name="why"
                        value="I was looking for something different"
                      />
                      {`I was looking for something different`}
                    </label>
                    <label>
                      <Field type="checkbox" name="why" value="other" />
                      {`other`}
                    </label>

                    <FormikTextArea
                      label="Comment (Optional)"
                      name="otherDesc"
                      rows={6}
                      placeholder="Please tell us more so we can improve the Hustle Club."
                    />
                  </Checkboxs>
                  <p>Select one or more option s to continue.</p>
                </Section>
              </Form>
            </FormWrapper>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  width: inherit;
  height: inherit;
  padding: 4.5rem 2rem 5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const StyledStepper = styled(Stepper)`
  height: 5rem;
  width: 80%;
`;
const FormWrapper = styled.div`
  width: 100%;
  padding: 5rem 2rem 4rem 2rem;
`;
const Section = styled.section`
  width: 100%;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`;
const H2 = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
const Checkboxs = styled.div`
  display: flex;
  flex-direction: column;
`;
