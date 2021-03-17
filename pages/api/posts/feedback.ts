import { NextApiRequest, NextApiResponse } from "next";

import { getTokenCookie } from "utils/auth-cookie";
import axios from "axios";

export default async function feedback(
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
      `https://wp.thehustleclub.com/wp-json/pl/v1/comments`,
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
