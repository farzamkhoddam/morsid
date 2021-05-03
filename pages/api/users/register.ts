import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
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
  let test = {};

  axios
    .post(`${process.env.BASE_URL}/api/register/`, { email, password })
    .then((resp) => {
      const token = resp?.data?.tokens?.access;
      if (token) {
        // navid وقتی لاگ اوت آماده شد باید این رو آنکامنت کنیم
        // setTokenCookie(res, token);
        res.status(200).json({ success: true });
        return;
      }
    })
    .catch((error) => {
      if (error.response) {
        console.log("navid yes");
        // Request made and server responded
        console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else {
        console.log("navid no");
      }
      res.status(400).send({ success: false, errors: error });
    });
}
