import { Formik, Form, Field } from "formik";

import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { fetchPostJSON } from "utils/stripe/api-helpers";
import getStripe from "utils/stripe/get-stripejs";
import { Expert } from "consts/experts";
import Button from "elements/Button";

interface FormValues {
  note: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

interface Props {
  currentExpert: Expert;
  // isPayActive: boolean;
  reserveDate: string | null;
}

export default function StripeButton({
  currentExpert,
  // isPayActive,
  reserveDate,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON("/api/checkout_sessions", {
      amount: currentExpert.price,
      expert: currentExpert.slug,
      reserveDate: reserveDate,
      expertMail: currentExpert.email,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      toast.error(
        response?.message || "We have a unknown problem. Please try again",
      );
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

    console.warn("error=", error.message);
    toast.error(
      error?.message || "We have a unknown problem. Please try again",
    );
    setLoading(false);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <PayButton
          label="Pay now"
          type="submit"
          disabled={loading || reserveDate === null}
        />
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

const PayButton = styled(Button)`
  width: 221px;
`;
