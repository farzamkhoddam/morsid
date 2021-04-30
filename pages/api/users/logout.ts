import { NextApiRequest, NextApiResponse } from "next";
import { removeTokenCookie } from "utils/auth-cookie";

export default async function RegisterUser(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  removeTokenCookie(res);
  res.setHeader("location", "/");
  res.status(302).end();
}
