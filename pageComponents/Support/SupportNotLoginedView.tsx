import Button from "components/Button";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import SimplePageHeader from "components/simplePageHeader";
import { device } from "consts/theme";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import React from "react";
import ToasterContainer from "components/ToasterContainer";

interface FormValues {
  name: string;
  email: string;
  question: string;
  tellMore: string;
}

const EditProfileSchema = yup.object().shape({
  name: yup.string().label("Name").required(),
  email: yup.string().label("Email Address").email().required(),
  question: yup.string().label("Question").required(),
  tellMore: yup.string().label("Tell More"),
});
export function SupportNotLoginedView() {
  const initialValues: FormValues = {
    name: "",
    email: "",
    question: "",
    tellMore: "",
  };

  return (
    <div className="edit-profile-page">
      {/* <ToasterContainer /> */}

      <SimplePageHeader activeItemIndex={2} />
      <Container>
        <Toaster
          position="bottom-center"
          toastOptions={{
            error: {
              style: {
                background: "#161515",
                color: "white",
              },
            },
          }}
        />
        <Wrapper>
          <TitleContainer>
            <div>How can we help?</div>
          </TitleContainer>
          <TellUs>
            Tell us about your problem, and we’ll find you a solution
          </TellUs>
          <Formik
            initialValues={initialValues}
            validationSchema={EditProfileSchema}
            onSubmit={async (values) => {
              try {
                await axios.post("/api/support", {
                  ...values,
                  status: "VISITOR",
                });
                toast.success("Your message has been successfully registered");
              } catch (e) {
                toast.error("Sorry, your operation failed.");
                console.log("error=", e);
              }
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form style={{ width: "100%" }}>
                <Section>
                  <RowItem>
                    <Label>Name</Label>
                    <StyledField name="name" type="text" />
                    {errors.name && touched.name ? (
                      <FieldError>{errors.name}</FieldError>
                    ) : null}
                  </RowItem>
                  <RowItem>
                    <Label>Email</Label>
                    <StyledField name="email" type="email" />
                    {errors.email && touched.email ? (
                      <FieldError>{errors.email}</FieldError>
                    ) : null}
                  </RowItem>
                  <RowItem2>
                    <Label>What’s your question?</Label>
                    <StyledField name="question" type="text" />
                    {errors.question && touched.question ? (
                      <FieldError>{errors.question}</FieldError>
                    ) : null}
                  </RowItem2>
                  <RowItem3>
                    <H2 style={{ marginBottom: "0.5rem" }}>{`Tell us more`}</H2>
                    <Textarea
                      style={{ paddingTop: "1rem", paddingLeft: "1rem" }}
                      component="textarea"
                      name="tellMore"
                      //   placeholder="Please tell us more so we can improve the Hustle Club."
                      rows={8}
                    />
                  </RowItem3>
                  <BottomContainer>
                    <SaveButton
                      value="SUBMIT"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </BottomContainer>
                </Section>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Container>
    </div>
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
  padding: 0 2rem;
  padding-top: 11rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 4rem;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1d3330;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 2rem;
  @media ${device.tabletL} {
    width: 100%;
  }
`;
const TellUs = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 144.4%;
  align-self: flex-start;
  position: absolute;
  top: 6rem;
  width: 89%;
  @media ${device.laptopXS} {
    top: 7rem;
  }
  @media ${device.tabletL} {
    font-weight: 500;
    font-size: 16px;
    line-height: 144.4%;
  }
`;
const Section = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  @media ${device.tabletL} {
    width: 100%;
    flex-direction: column;
  }
  > :nth-child(odd) {
    // padding-right: var(--wcw);
  }
`;
const RowItem = styled.div`
  position: relative;
  width: 49%;
  margin-top: 3.2rem;
  height: 7rem;
  @media ${device.tabletL} {
    width: 100%;
  }
  @media ${device.laptopXS} {
    margin-top: 3.3rem;
  }
`;
const RowItem2 = styled.div`
  position: relative;
  width: 100%;

  @media ${device.tabletL} {
    width: 100%;
  }
  @media ${device.laptopXS} {
    margin-top: 3.3rem;
  }
`;
const RowItem3 = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 4rem;
  @media ${device.tabletL} {
    width: 100%;
  }
`;
const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: var(--gray-color-normal);
`;

const StyledField = styled(Field)`
    width: 100%;
    margin: 8px 0 3.125rem;
    padding: 16px;
    border: 1px solid;
    border-radius: 1px;
    appearance: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.06em;
    border-color: var(--primary-color-normal)};
    overflow-wrap: anywhere;
    text-align: start;
    margin-bottom: 3rem;
    height: 64px;
    display: flex;
    align-items: center;
`;
const FieldError = styled.div`
  position: absolute;
  bottom: 1rem;
  color: red;
`;
const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
const SaveButton = styled.input`
  display: inline-flex;
  align-items: center;
  self-align: flex-start;
  justify-content: center;
  width: 50%;
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
  background: var(--accent-color-normal);
  color: var(--primary-color-normal);
  border-radius: 1px;
  text-decoration: none;
  appearance: none;
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  transition: background 0.3s linear;
  width: 16.5rem;
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
    margin: 0;
  }
`;
const H2 = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--gray-color-normal);
  margin-bottom: 0rem;
  @media ${device.tabletL} {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Textarea = styled(Field)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f;
  width: 100%;
  height: 15.93rem;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;
  }
`;
