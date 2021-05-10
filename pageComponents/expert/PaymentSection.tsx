import { Formik, Form, Field } from "formik";

import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import toast from "react-hot-toast";
import React, { useState } from "react";

import { Body1, Caption, Title } from "elements/typo";
import { Textarea } from "elements/Textarea";
import { formatAmountForDisplay } from "utils/stripe/stripe-helpers";
import { fetchPostJSON } from "utils/stripe/api-helpers";
import getStripe from "utils/stripe/get-stripejs";
import { Expert } from "consts/experts";

interface FormValues {
  note: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

interface Props {
  currentExpert: Expert;
}

export default function PaymentSection({ currentExpert }: Props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON("/api/checkout_sessions", {
      amount: 10.0,
      expert: currentExpert.slug,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    setLoading(false);
  };

  return (
    <Container>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          toast.success("navid values");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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

            <Row
              id="Row"
              style={{ alignItems: "stretch", marginBottom: "41px" }}
            >
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
      </Formik> */}
      <form onSubmit={handleSubmit}>
        <button
          className="checkout-style-background"
          type="submit"
          disabled={loading}
        >
          Pay now
        </button>
      </form>
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
