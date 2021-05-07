import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export interface ForgetPasswordReqError {
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

  const { email } = req.body;
  axios
    .post(`${process.env.BASE_URL}/api/users/reset_password/`, {
      email,
    })
    .then(() => {
      res.status(200).json({ success: true });
      return;
    })
    .catch((error) => {
      if (error.response) {
        // Request made and server responded
        console.log(error?.response?.data);
        res.status(400).send({
          success: false,
          error: error?.response?.data?.email,
        } as ForgetPasswordReqError);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else {
        res.status(400).send({
          success: false,
          error: "Unfortunatly, there is a problem now. please try later again",
        } as ForgetPasswordReqError);
      }
    });
}
