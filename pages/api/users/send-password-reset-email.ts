import { NextApiRequest, NextApiResponse } from "next";
import { fetchSendPasswordResetEmail } from "wpapi/graphql";

export default async function RegisterUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  const { email } = req.body;

  try {
    await fetchSendPasswordResetEmail({
      variables: {
        input: {
          username: email,
        },
      },
    });
  } catch (e) {
    console.log(e);
    // ignore reset password errors
  }

  res.status(200).json({ success: true });
}
