import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getTokenCookie } from "utils/auth-cookie";

export default async function EditProfileUser(
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
      `https://wp.thehustleclub.com/wp-json/pl/v1/edit_profile?v=1`,
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
