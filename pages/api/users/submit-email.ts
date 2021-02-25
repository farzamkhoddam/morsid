// این رکوئست توی کامپوننت گت ایمیل کال میشه و هدفش اینه که قبل از اینکه کاربر ثبت نام کنه، بتونیم ایمیلش رو توی یک فرم خاص ثبت کنیم
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

  try {
    await axios.post(
      `https://hooks.zapier.com/hooks/catch/1929342/opvrayz`,
      req.body,
    );
    res.status(200).json({ success: true });
    return;
  } catch (e) {
    console.log("error=", e);
  }
  res.status(400).send({ success: false });
}
