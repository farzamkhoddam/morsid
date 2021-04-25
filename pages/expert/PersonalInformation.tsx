import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import toast from "react-hot-toast";
import React from "react";
import ToasterContainer from "components/ToasterContainer";
import { TextInput } from "elements/TextInput";
import { Body1, Caption, Title } from "elements/typo";
import { Textarea } from "elements/Textarea";

interface FormValues {
  email: string;
  name: string;
  note: string;
}

const initialValues: FormValues = {
  email: "",
  name: "",
  note: "",
};

const LoginSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
  name: yup.string().label("Name").required(),
  note: yup.string().label("Note"),
});

export default function PersonalInformation() {
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
          console.log("navid values=", values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Row>
              <Flex1>
                <Caption as="label" htmlFor={"name"}>
                  Your Name
                </Caption>
                <TextInput
                  name="name"
                  type="text"
                  placeholder="Card number"
                  style={{ marginRight: "15px" }}
                />
              </Flex1>
              <Flex1>
                <Caption as="label" htmlFor={"email"}>
                  Your Email
                </Caption>
                <TextInput
                  name="email"
                  type="email"
                  placeholder="john.doe@gmail.com"
                  style={{ marginleft: "15px" }}
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
            <Row style={{ alignItems: "flex-start" }}>
              <Flex1>
                <Caption as="label">Credit Card</Caption>
                <TextInput
                  name="cardNumber"
                  type="text"
                  placeholder="Card number"
                  style={{ marginRight: "15px" }}
                />
              </Flex1>

              <ConfirmData>
                <Body1
                  style={{
                    color: "var(--text-color-dark)",
                  }}
                >
                  Billed for 30 minutes meeting
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
