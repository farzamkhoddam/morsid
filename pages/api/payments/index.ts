import { NextApiRequest, NextApiResponse } from "next";
import { fetchCreateStripeSession } from "../../../wpapi";
import { getTokenCookie } from "utils/auth-cookie";

export default async function RegisterUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  try {
    const token = getTokenCookie(req);
    const { data } = await fetchCreateStripeSession({
      clientConfig: () => ({ headers: { Authorization: `Bearer ${token}` } }),
      variables: {
        input: {
          clientMutationId: "next",
        },
      },
    });
    const sessionId = data.data.createStripeSession.stripeSessionId;
    res.status(200).json({ success: true, sessionId });
  } catch (e) {}
  res.status(400).send({ success: false });
}
