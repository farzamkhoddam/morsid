import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Support(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }
  try {
    await axios.post(
      `https://hooks.zapier.com/hooks/catch/1929342/onvmz0m`,
      req.body,
    );
    res.status(200).json({ success: true });
    return;
  } catch (e) {
    console.log(e);
  }
  res.status(400).send({ success: false });
}
