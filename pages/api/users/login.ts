import { NextApiRequest, NextApiResponse } from "next";

import { setTokenCookie } from "utils/auth-cookie";
import { fetchLoginUser } from "wpapi/graphql";

export default async function RegisterUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  const { email, password } = req.body;

  try {
    const { data } = await fetchLoginUser({
      variables: {
        input: {
          clientMutationId: "next",
          username: email,
          password,
        },
      },
    });
    const token = data?.data?.login?.refreshToken;
    if (token) {
      setTokenCookie(res, token);
      res.status(200).json({ success: true });
      return;
    }
  } catch (e) {
    console.log(e);
  }
  res.status(400).send({ success: false });
}
