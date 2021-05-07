import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { setTokenCookie } from "utils/auth-cookie";

export interface LoginReqError {
  success: false;
  error: string;
}

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
    .then((resp) => {
      const token = resp?.data?.access;
      if (token) {
        setTokenCookie(res, token);
        res.status(200).json({ success: true });
        return;
      } else {
        res.status(400).send({
          success: false,
          error:
            "Unfortunatly, there is a problem in login process. please try later again",
        } as LoginReqError);
      }
    })
    .catch((error) => {
      if (error.response) {
        // Request made and server responded
        console.log(error?.response?.data);
        res.status(400).send({
          success: false,
          ...error?.response?.data,
        } as LoginReqError);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else {
        res.status(400).send({
          success: false,
          error: "Unfortunatly, there is a problem now. please try later again",
        } as LoginReqError);
      }
    });
}
