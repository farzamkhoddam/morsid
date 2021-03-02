import Button from "components/Button";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { device } from "consts/theme";
import styled from "styled-components";
import LeftArrow from "components/Svgs/leftArrow";
import axios from "axios";
import React from "react";
import Stepper from "components/Stepper";
import { inherits } from "util";
import Link from "next/link";

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
export function Step3({ email, name }: Props) {
  const initialValues: formValue = {};

  return (
    <Container>
      <Wrapper>
        <StyledStepper
          steps={["Feedback", "Details", "Review"]}
          activeStep={2}
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
                <H1>Are you sure you want to go?</H1>
                <P>If you unsubscribe now, you miss important things.</P>
                <Buttonscontainer>
                  <BackButtonDiv>
                    <p>I want to stay</p>
                  </BackButtonDiv>
                  <SubmitButton
                    value="SUBMIT"
                    type="submit"
                    // اگه آبجکت ولیوز خالی باشه، دکمه رو دیزیبل میکنه
                    disabled={
                      Object.keys(values).length === 0 &&
                      values.constructor === Object
                    }
                  />
                </Buttonscontainer>
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
  height: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 71%;
`;
const H1 = styled.h1`
  width: fit-content;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1d3330;
  @media ${device.tabletL} {
    font-size: 20px;
    line-height: 24px;
    padding-right: 22px;
    margin-bottom: 1.875rem;
  }
  @media ${device.mobileL} {
    padding-right: 1rem;
  }
`;
const P = styled.section`
  width: fit-content;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #161515;
  margin-bottom: 4.4375rem;
`;
const Buttonscontainer = styled.div`
  width: 57%;
  display: flex;
  justify-content: space-between;
  @media ${device.tabletL} {
    width: 73%;
  }
`;

const SubmitButton = styled.input<{ disabled: boolean }>`
  border: 3px solid var(--accent-color-normal);
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.5rem;
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
  background-color: white;
  color: var(--primary-color-normal);
  border-radius: 1px;
  text-decoration: none;
  appearance: none;
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
  @media ${device.tabletM} {
    width: 15.75rem;
  }
  @media ${device.mobileL} {
    position: relative;
    margin: 0 auto;
    right: 0;
  }
`;
const BackButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--accent-color-normal);
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  width: 50%;
  display: flex;
  align-items: center;
  @media ${device.tabletM} {
    width: 14.25rem;
  }
`;
