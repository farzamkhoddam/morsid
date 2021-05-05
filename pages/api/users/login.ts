import axios from "axios";
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

  axios
    .post(`${process.env.BASE_URL}/api/login/`, {
      email,
      password,
    })
    .then((resp: Record<string, any>) => {
      if (resp?.data) console.log("navid resp has data=", resp.data);
      else console.log("navid resp has not data");
      const token = resp?.data?.access;
      if (token) {
        setTokenCookie(res, token);
        res.status(200).json({ success: true });
        return;
      } else {
        res.status(400).send({
          success: false,
          error: [
            "Unfortunatly, there is a problem in login process. please try later again",
          ],
        });
      }
    })
    .catch((error) => {
      if (error.response) {
        // Request made and server responded
        console.log(error?.response?.data);
        res.status(400).send({
          success: false,
          error: error?.response?.data,
        });
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else {
        res.status(400).send({
          success: false,
          error: [
            "Unfortunatly, there is a problem now. please try later again",
          ],
        });
      }
    });
}
