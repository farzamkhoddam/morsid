import { Formik } from "formik";
import { device } from "consts/theme";
import styled from "styled-components";

import React, { Dispatch, SetStateAction } from "react";
import Stepper from "components/Stepper";
import { UnsubscribeFormData } from "./View";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {
  email: string;
  setFormData: Dispatch<SetStateAction<UnsubscribeFormData>>;
  setStepNumber: Dispatch<SetStateAction<number>>;
  formData: UnsubscribeFormData;
}

export function Step3({ email, formData }: Props) {
  const router = useRouter();
  const submitHandler = async () => {
    console.log("navid data=", formData);

    try {
      const res = await axios.post("/wp-json/pl/v1/cl_cancel_subscribe_user", {
        email: email,
        formData,
      });
      console.log("navid res=", res);
      // setUserData(res.data.user.subscribed);
    } catch {
      toast.error(
        "Unfortunately, something went wrong. Please try again later ...",
      );
    }
  };
  const stayHandler = () => {
    router.replace("/");
  };
  return (
    <Container>
      <Wrapper>
        <StyledStepper
          steps={["Feedback", "Details", "Review"]}
          activeStep={3}
        />
        <FormWrapper>
          <H1>Are you sure you want to go?</H1>
          <P>If you unsubscribe now, you miss important things.</P>
          <Buttonscontainer>
            <BackButtonDiv onClick={() => stayHandler()}>
              <p>I want to stay</p>
            </BackButtonDiv>
            <SubmitButton onClick={() => submitHandler()}>SUBMIT</SubmitButton>
          </Buttonscontainer>
        </FormWrapper>
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
  padding: 4.5rem 22px 5rem 22px;

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
  width: 100%;
  max-width: 714px;
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

const SubmitButton = styled.div`
  cursor: pointer;
  border: 3px solid var(--accent-color-normal);
  margin-left: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
  background-color: white;
  color: var(--primary-color-normal);
  border-radius: 1px;
  text-decoration: none;
  appearance: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  transition: background 0.3s linear;

  &.-outline {
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
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: var(--accent-color-normal);
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  width: 50%;
  margin-right: 0.7rem;
  display: flex;
  align-items: center;
  @media ${device.tabletM} {
    width: 14.25rem;
  }
`;
