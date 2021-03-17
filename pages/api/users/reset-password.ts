import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getTokenCookie } from "utils/auth-cookie";

export default async function ResetPassword(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  try {
    const token = getTokenCookie(req);

    await axios.post(
      `https://wp.thehustleclub.com/wp-json/pl/v1/reset_password`,
      req.body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );
    res.status(200).json({ success: true });
    return;
  } catch (e) {
    console.log(e);
  }
  res.status(400).send({ success: false });
}
