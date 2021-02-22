import Button from "components/Button";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { device } from "consts/theme";
import styled from "styled-components";

import axios from "axios";
import React from "react";
import Stepper from "components/Stepper";

interface Props {
  email: string;
  name: string;
}
interface formValue {
  why?: string[];
  otherDesc?: string;
}
function removeEmptyKeys(values: formValue) {
  if (values?.why?.length === 0) delete values.why;
  if (values?.otherDesc === "") delete values.otherDesc;
}
export function Step1({ email, name }: Props) {
  const initialValues: formValue = {};

  return (
    <Container>
      <Wrapper>
        <StyledStepper
          steps={["Feedback", "Details", "Review"]}
          activeStep={1}
        />
        <Formik
          initialValues={initialValues}
          //   validationSchema={step1Schema}

          onSubmit={async (values) => {
            try {
              //   await axios.post("/api/users/login", values);
              //   const res = await axios.post<{ user: { subscribed: boolean } }>(
              //     "/api/users/me",
              //   );
              console.log("navid value=", values);
            } catch {
              console.log("navid error");
            }
          }}
        >
          {({ values }) => {
            removeEmptyKeys(values);
            console.log("navid values==", values);
            console.log("navid values==", values === {});
            return (
              <FormWrapper>
                <Section>
                  <H1>{`Dear ${name}, we’d hate to see you go`}.</H1>

                  <StyledForm>
                    <H2 style={{ marginTop: "3rem", marginBottom: "0" }}>
                      Why do you want to cancel?
                    </H2>
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
                      <label style={{ marginBottom: "3rem" }}>
                        <Field type="checkbox" name="why" value="other" />
                        {`other`}
                      </label>

                      <H2
                        style={{ marginBottom: "2rem" }}
                      >{`Comment (Optional)`}</H2>
                      <Textarea
                        style={{ paddingTop: "1rem", paddingLeft: "1rem" }}
                        as="textarea"
                        name="otherDesc"
                        placeholder="Please tell us more so we can improve the Hustle Club."
                        rows={8}
                      />
                    </Checkboxs>
                    <p style={{ marginTop: "30px" }}>
                      Select one or more option s to continue.
                    </p>

                    <SubmitButton
                      value="CONTINIUE"
                      type="submit"
                      // اگه آبجکت ولیوز خالی باشه، دکمه رو دیزیبل میکنه
                      disabled={
                        Object.keys(values).length === 0 &&
                        values.constructor === Object
                      }
                    />
                  </StyledForm>
                  <MetaData>
                    <H2 style={{ marginTop: "3rem" }}>
                      You are about to lose your
                    </H2>
                    <H2>Hustle Club membership</H2>
                    <H3>Commitment:</H3>
                    <H3>Monthly plan, Paid monthly - US$9/mo</H3>
                  </MetaData>
                </Section>
              </FormWrapper>
            );
          }}
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

const FormWrapper = styled.div`
  width: 100%;
  padding: 5rem 2rem 4rem 2rem;
`;
const StyledStepper = styled(Stepper)`
  height: 5rem;
  width: 71%;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  position: relative;
`;
const StyledForm = styled(Form)`
  padding-top: 4rem;
  width: 60%;
`;
const MetaData = styled.div`
  padding-top: 4rem;
  width: 40%;
`;
const H1 = styled.h1`
  position: absolute;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`;
const H2 = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #4f4f4f;
`;
const Checkboxs = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  width: 80%;
  label {
    margin-bottom: 1.87rem;
    color: #4f4f4f;
    input {
      margin-right: 12px;
    }
  }
`;
const Textarea = styled(Field)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;
  }
`;
const SubmitButton = styled.input<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.5rem;
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
    background:  ${({ disabled }) =>
      disabled ? "var(--gray-color-xlight)" : "var(--accent-color-normal)"};
  }
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
  position: absolute;
  right: 0;
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
`;
