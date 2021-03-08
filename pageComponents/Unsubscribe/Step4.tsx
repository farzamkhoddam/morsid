import { device } from "consts/theme";
import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";

export function Step4() {
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <H1>You have successfully unsubscribed!</H1>
          <P>You have been successfuly removed from this subscriber</P>
          <SubmitButton onClick={() => router.replace("/")}>Home</SubmitButton>
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
  height: 100%;
  padding: 5rem 22px 4rem 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tabletL} {
    padding-top: 1rem;
  }
  @media ${device.mobileL} {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #1d3330;
  margin-bottom: 1.8125rem;
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
const P = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #161515;
  margin-bottom: 4.5rem;
`;
const SubmitButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.5rem;
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
  background-color: var(--accent-color-normal);
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
  @media ${device.tabletM} {
    width: 15.75rem;
  }
  @media ${device.mobileL} {
    position: relative;
    margin: 0 auto;
    right: 0;
  }
`;
