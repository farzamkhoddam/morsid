import { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import Button from "./Button";
import styled from "styled-components";

interface Props {
  className?: string;
}

export function StripeButton({ className }: Props) {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    (async function () {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "",
      );
      setStripe(stripe);
    })();
  }, []);

  const isDisabled = !stripe || isRedirecting;

  const handleStripe = async () => {
    if (isDisabled) {
      return;
    }

    setIsRedirecting(true);

    try {
      const resp = await axios.post("/api/payments", {});

      stripe?.redirectToCheckout({ sessionId: resp.data.sessionId });
    } catch (e) {
      // TODO show a proper alert
      alert("Somthing went wrong...");
    }
  };

  return (
    <Button
      title={"Subscribe Now"}
      clickHandler={handleStripe}
      className={className}
    />
  );
}
