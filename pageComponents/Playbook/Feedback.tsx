import { Formik, Form, Field } from "formik";
import { device } from "consts/theme";
import styled from "styled-components";
import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import ToasterContainer from "components/ToasterContainer";
import FeedBackSmilies from "./FeedbackSmilies";

interface Props {
  playbookId: string;
}
interface Feedback {
  feedback_no: number;
  content: string;
  post_id: string;
}

export default function Step1({ playbookId }: Props) {
  const initialValues: Feedback = {
    feedback_no: -1,
    content: "",
    post_id: playbookId,
  };
  const [contentmentLevel, setContentmentLevel] = useState<number>(-1);

  return (
    <Container>
      <ToasterContainer />
      <Wrapper>
        <Title>What did you think about this article?</Title>
        <FeedBackSmilies
          contentmentLevel={contentmentLevel}
          setContentmentLevel={setContentmentLevel}
        />
        <Formik
          initialValues={initialValues}
          onSubmit={async (values: Partial<Feedback>) => {
            try {
              await axios.post("/api/posts/feedback", {
                ...values,
                feedback_no: contentmentLevel,
                post_id: playbookId,
              } as Feedback);
              toast.error("Thank you for your feedback");
            } catch (e) {
              toast.error("Sorry, your operation failed.");
              console.log("error=", e);
            }
          }}
        >
          {({ isSubmitting }) => {
            return (
              <FormWrapper>
                <StyledForm>
                  <Textarea
                    style={{ paddingTop: "1rem", paddingLeft: "1rem" }}
                    component="textarea"
                    name="content"
                    placeholder="Tell us more about why you choose your rating"
                  />

                  <SubmitButton
                    value="SUBMIT"
                    type="submit"
                    disabled={contentmentLevel < 0 || isSubmitting}
                  />
                </StyledForm>
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
  height: 444px;
  background: #ffffff;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
  padding-bottom: 40px;
`;
const Wrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  width: inherit;
  height: inherit;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.h5`
  font-weight: 600;
  font-size: 24px;
  line-height: 156.4%;
  color: #1d3330;
  margin-top: 39px;
  @media ${device.mobileL} {
    text-align: center;
    width: 80%;
  }
  @media ${device.mobileS} {
    font-size: 20px;
  }
`;
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledForm = styled(Form)`
  @media ${device.mobileL} {
    width: 85%;
  }
`;
const Textarea = styled(Field)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f;
  width: 555px;
  height: 120px;
  &::placeholder {
    font-size: 16px;
    line-height: 156.4%;
    color: #bdbdbd;
  }
  @media ${device.mobileL} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const SubmitButton = styled.input<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 264px;
  height: 64px;
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
  margin: 0 auto;
  margin-top:32px;
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
