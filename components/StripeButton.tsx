import { useEffect, useState } from "react";
import styled from "styled-components";
import ky from "ky/umd";
import { loadStripe, Stripe } from "@stripe/stripe-js";

interface Props {
  title: string;
  className?: string;
}

export function StripeButton({ title, ...props }: Props) {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    (async function () {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
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
      const resp = await ky
        .post("/api/payments", {})
        .json<{ sessionId: string }>();

      stripe.redirectToCheckout({ sessionId: resp.sessionId });
    } catch (e) {
      // TODO show a proper alert
      alert("Somthing went wrong...");
    }
  };

  return (
    <Button
      {...props}
      onClick={handleStripe}
      type="button"
      isLoading={isDisabled}
      disabled={isDisabled}
    >
      {title}
    </Button>
  );
}

const Button = styled.button<{ isLoading?: boolean }>`
  background-color: #000;
  color: #fff;
  opacity: ${({ isLoading }) => (isLoading ? "0.5" : "1")};
`;
