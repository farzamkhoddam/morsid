import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";
import { formatAmountForStripe } from "utils/stripe/stripe-helpers";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-08-27",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { reserveDate, amount, expert, expertMail } = req.body;
    try {
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "donate",
        payment_method_types: ["card"],
        line_items: [
          {
            name: `${expert} Meeting`,
            amount: formatAmountForStripe(amount, "usd"),
            //navid :implement multi currency
            currency: "usd",
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/success-payment?expert=${expert}&expertMail=${expertMail}&reserveDate=${reserveDate}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/expert/${expert}/reserve`,
      };
      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
        params,
      );

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
