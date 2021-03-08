import Button from "components/Button";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { device } from "consts/theme";
import styled from "styled-components";

import React, { Dispatch, SetStateAction } from "react";
import Stepper from "components/Stepper";
import { UnsubscribeFormData } from "./View";

interface Props {
  name: string;
  setFormData: Dispatch<SetStateAction<UnsubscribeFormData>>;
  setStepNumber: Dispatch<SetStateAction<number>>;
}

function removeEmptyKeys(values: Partial<UnsubscribeFormData>) {
  if (values?.why?.length === 0) delete values.why;
  if (values?.otherDesc === "") delete values.otherDesc;
}
export function Step1({ name, setFormData, setStepNumber }: Props) {
  const initialValues: Partial<UnsubscribeFormData> = {};

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
          onSubmit={async (values: Partial<UnsubscribeFormData>) => {
            try {
              setFormData(values);
              setStepNumber(2);
            } catch {
              console.log("navid error");
            }
          }}
        >
          {({ values }) => {
            removeEmptyKeys(values);
            return (
              <FormWrapper>
                <Section>
                  <H1>{`Dear ${name}, we’d hate to see you go`}.</H1>

                  <StyledForm>
                    <TwoSide>
                      <Side1>
                        <FirstH2>Why do you want to cancel?</FirstH2>
                        <Checkboxs
                          role="group"
                          aria-labelledby="checkbox-group"
                        >
                          <Label>
                            <Field
                              type="checkbox"
                              name="why"
                              value="I’ve found an alternative"
                            />
                            {`I’ve found an alternative.`}
                          </Label>
                          <Label>
                            <Field
                              type="checkbox"
                              name="why"
                              value="I find the material hard to digest"
                            />
                            {`I find the material hard to digest`}
                          </Label>
                          <Label>
                            <Field
                              type="checkbox"
                              name="why"
                              value="I didn’t implement the playbooks"
                            />
                            {`I didn’t implement the playbooks`}
                          </Label>

                          <Label>
                            <Field
                              type="checkbox"
                              name="why"
                              value="I was looking for something different"
                            />
                            {`I was looking for something different`}
                          </Label>
                          <Label style={{ marginBottom: "2.5rem" }}>
                            <Field type="checkbox" name="why" value="other" />
                            {`other`}
                          </Label>

                          <H2
                            style={{ marginBottom: "2rem" }}
                          >{`Comment (Optional)`}</H2>
                          <Textarea
                            style={{ paddingTop: "1rem", paddingLeft: "1rem" }}
                            component="textarea"
                            name="otherDesc"
                            placeholder="Please tell us more so we can improve the Hustle Club."
                            rows={8}
                          />
                        </Checkboxs>
                        <Desc>Select one or more option s to continue.</Desc>
                      </Side1>
                      <Side2>
                        <Side2Title>
                          You are about to lose your Hustle Club membership
                        </Side2Title>
                        <Side2Subtitle>
                          <DesktopH3>Commitment:</DesktopH3>
                          <DesktopH3>
                            Monthly plan, Paid monthly - US$9/mo
                          </DesktopH3>
                          <MobileH3>
                            Commitment: Monthly plan, Paid monthly - US$9/mo
                          </MobileH3>
                        </Side2Subtitle>
                      </Side2>
                    </TwoSide>

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
  padding: 4.5rem 22px 5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media ${device.tabletL} {
    padding-right: 0;
    padding-left: 0;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  padding: 5rem 22px 4rem 22px;
  @media ${device.tabletL} {
    padding-top: 1rem;
  }
  @media ${device.mobileL} {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
const StyledStepper = styled(Stepper)`
  height: 5rem;
  width: 100%;
  max-width: 714px;
`;

const Section = styled.section`
  width: 100%;
`;
const StyledForm = styled(Form)`
  padding-top: 4rem;
  width: 100%;
`;
const TwoSide = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  @media ${device.tabletL} {
    flex-direction: column;
  }
`;
const Side1 = styled.div`
  width: 60%;
  @media ${device.tabletL} {
    width: 90%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
const Side2 = styled.div`
  width: 40%;
  @media ${device.tabletL} {
    width: 100%;
    margin-bottom: 84px;
  }
`;
const H1 = styled.h1`
  position: absolute;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  @media ${device.tabletL} {
    font-size: 20px;
    line-height: 24px;
    padding-right: 22px;
  }
  @media ${device.mobileL} {
    padding-right: 1rem;
  }
`;
const H2 = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  @media ${device.tabletL} {
    font-size: 16px;
    line-height: 20px;
  }
`;
const FirstH2 = styled(H2)`
  margin-top: 3rem;
  margin-bottom: 0;
  @media ${device.tabletL} {
    margin-top: 1rem;
  }
  @media ${device.mobileM} {
    margin-top: 2rem;
  }
`;
const Side2Title = styled(H2)`
  margin-top: 3rem;
  width: 70%;
  line-height: 200%;
  @media ${device.tabletL} {
    margin-top: 0;
    width: fit-content;
    line-height: 100%;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #4f4f4f;
  @media ${device.tabletL} {
    font-size: 20px;
    line-height: 29px;
  }
`;
const DesktopH3 = styled(H3)`
  @media ${device.tabletL} {
    display: none;
  }
`;
const MobileH3 = styled(H3)`
  display: none;
  @media ${device.tabletL} {
    display: inline;
    text-align: center;
  }
`;
const Side2Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
    @media ${device.tabletL} {
      margin-right: 0.5rem;
    }
  }
  @media ${device.tabletL} {
    flex-direction: row;
  }
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
  @media ${device.mobileL} {
    width: 100%;
  }
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
const Desc = styled.p`
  margin-top: 30px;
  margin-bottom: 28px;
  width: fit-content;
  text-align: center;
  color: #4f4f4f;
  @media ${device.tabletL} {
    margin-top: 40px;
    margin-bottom: 60px;
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
  right: 22px;
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
  @media ${device.mobileL}{
      position: relative;
      margin:0 auto;
      right:0;
  }
`;
