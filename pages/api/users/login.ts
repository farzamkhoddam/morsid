import { NextApiRequest, NextApiResponse } from "next";
import { fetchLoginUser } from "../../../wpapi";
import { setTokenCookie } from "utils/auth-cookie";

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
    const token = data.data.login.refreshToken;
    setTokenCookie(res, token);
    res.status(200).json({ success: true });
    return;
  } catch (e) {}
  res.status(400).send({ success: false });
}
