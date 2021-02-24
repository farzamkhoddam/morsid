import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function EditProfileUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  // const { firstName, lastName } = req.body;
  console.log("navid req.body=", req);
  try {
    const result = await axios.post(
      `https://wp.thehustleclub.com/wp-json/pl/v1/edit_profile?v=1`,
      req.body,
    );
    console.log("navid res", result);
    res.status(200).json({ success: true });
    // res.status(200).json({ body: req.body });
  } catch (e) {
    console.log(e);
  }
  res.status(400).send({ success: false });
}
