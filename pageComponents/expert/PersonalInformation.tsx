import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import toast from "react-hot-toast";
import React from "react";
import ToasterContainer from "components/ToasterContainer";
import { InputField, TextInput } from "elements/TextInput";
import { Body1, Caption, Title } from "elements/typo";
import { Textarea } from "elements/Textarea";
import Button from "elements/Button";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import { FieldProps } from "interfaces/formik";
interface FormValues {
  email: string;
  name: string;
  note: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

const initialValues: FormValues = {
  email: "",
  name: "",
  note: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
};

const LoginSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
  name: yup.string().label("Name").required(),
  note: yup.string().label("Note"),
});

export default function PersonalInformation() {
  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
  } = usePaymentInputs();
  const router = useRouter();
  return (
    <Container>
      <ToasterContainer />
      <Body1 style={{ color: "var(--text-color-dark)", marginBottom: "2rem" }}>
        Personal Information
      </Body1>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          toast.success("navid values");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Row>
              <Flex1 style={{ paddingRight: "1rem" }}>
                <Caption as="label" htmlFor={"name"}>
                  Your Name
                </Caption>
                <TextInput name="name" type="text" placeholder="Card number" />
              </Flex1>
              <Flex1 style={{ paddingLeft: "1rem" }}>
                <Caption as="label" htmlFor={"email"}>
                  Your Email
                </Caption>
                <TextInput
                  name="email"
                  type="email"
                  placeholder="john.doe@gmail.com"
                />
              </Flex1>
            </Row>
            <Row>
              <Flex1>
                <Caption
                  as="label"
                  htmlFor={"note"}
                  style={{ marginBottom: "0.5rem", display: "block" }}
                >
                  Your Note
                </Caption>
              </Flex1>
            </Row>
            <Textarea
              placeholder="Write a note to them about things you want to talk about and provide a bit of context."
              style={{ padding: "1rem" }}
              name="note"
              rows={8}
            />
            <Body1
              style={{
                color: "var(--text-color-dark)",
                marginBottom: "2rem",
                maxWidth: "264px",
              }}
            >
              Payment Information
            </Body1>
            <Row
              id="Row"
              style={{ alignItems: "stretch", marginBottom: "41px" }}
            >
              <Flex1>
                <div>
                  <CreditForm id="CreditForm">
                    <Row>
                      <Caption as="label" style={{ margin: "0 1rem 0.5rem 0" }}>
                        Credit Card
                      </Caption>
                      <svg {...getCardImageProps({ images })} />
                    </Row>
                    <Field name="cardNumber">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched },
                      }: FieldProps) => {
                        return (
                          <>
                            <InputField
                              hasError={
                                touched.cardNumber &&
                                meta.erroredInputs.cardNumber
                              }
                              {...getCardNumberProps({
                                onBlur: field.onBlur,
                                onChange: field.onChange,
                                name: "cardNumber",
                              })}
                            />
                            {touched.cardNumber &&
                            meta.erroredInputs.cardNumber ? (
                              <span style={{ color: "red" }}>
                                {meta.erroredInputs.cardNumber}
                              </span>
                            ) : null}
                          </>
                        );
                      }}
                    </Field>

                    <Row style={{ marginTop: "30px" }}>
                      <div>
                        <Caption
                          as="label"
                          style={{ marginBottom: "0.5rem", display: "block" }}
                        >
                          Expiry date
                        </Caption>
                        <div style={{ marginRight: "1rem", display: "block" }}>
                          <Field name="expiryDate">
                            {({
                              field, // { name, value, onChange, onBlur }
                              form: { touched },
                            }: FieldProps) => {
                              return (
                                <>
                                  <InputField
                                    hasError={
                                      touched.expiryDate &&
                                      meta.erroredInputs.expiryDate
                                    }
                                    {...getExpiryDateProps({
                                      onBlur: field.onBlur,
                                      onChange: field.onChange,
                                      name: "expiryDate",
                                    })}
                                  />
                                  {touched.expiryDate &&
                                  meta.erroredInputs.expiryDate ? (
                                    <span style={{ color: "red" }}>
                                      {meta.erroredInputs.expiryDate}
                                    </span>
                                  ) : null}
                                </>
                              );
                            }}
                          </Field>
                        </div>
                      </div>
                      <div>
                        <Caption
                          as="label"
                          style={{ marginBottom: "0.5rem", display: "block" }}
                        >
                          CVC/CVV
                        </Caption>
                        <div style={{ marginLeft: "1rem", display: "block" }}>
                          <Field name="cvc">
                            {({
                              field, // { name, value, onChange, onBlur }
                              form: { touched },
                            }: FieldProps) => {
                              return (
                                <>
                                  <InputField
                                    hasError={
                                      touched.cvc && meta.erroredInputs.cvc
                                    }
                                    {...getCVCProps({
                                      onBlur: field.onBlur,
                                      onChange: field.onChange,
                                      name: "cvc",
                                    })}
                                  />
                                  {touched.cvc && meta.erroredInputs.cvc ? (
                                    <span style={{ color: "red" }}>
                                      {meta.erroredInputs.cvc}
                                    </span>
                                  ) : null}
                                </>
                              );
                            }}
                          </Field>
                        </div>
                        {/* <Field name="cvc">
                          
                          {({ field }) => (
                            <InputField
                              {...getCVCProps({
                                onBlur: field.onBlur,
                                onChange: field.onChange,
                              })}
                            />
                          )}
                        </Field> */}
                      </div>
                    </Row>
                    <Row>
                      <Button
                        label="Pay Now"
                        style={{ width: "100%", marginTop: "4px" }}
                      />
                    </Row>
                  </CreditForm>
                </div>
              </Flex1>
              <ConfirmData>
                <Body1
                  style={{
                    color: "var(--text-color-dark)",
                  }}
                >
                  Billed for 1 hour meeting
                </Body1>
                <Body1
                  style={{
                    color: "var(--text-color-dark)",
                    marginBottom: "1.5rem",
                  }}
                >
                  With Josh Jennings
                </Body1>
                <Title style={{ color: "var(--primary-color-dark)" }}>
                  $144.5
                </Title>
              </ConfirmData>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: baseline;
  width: 100%;
`;

const Flex1 = styled.div`
  flex: 1;
`;
const CreditForm = styled(Row)`
  flex-direction: column;
  padding-right: 1rem;
`;
const ConfirmData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--border-color-normal);
  border-radius: 8px;
  flex: 1;
  margin-top: 27px;
`;
