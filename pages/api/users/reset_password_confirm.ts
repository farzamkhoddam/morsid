import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export interface NewPasswordReqError {
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

  const { uid, token, new_password } = req.body;

  axios
    .post(`${process.env.BASE_URL}/backendapi/users/reset_password_confirm/`, {
      new_password,
      uid,
      token,
    })
    .then((resp) => {
      res.status(200).json({ success: true });
      return;
    })
    .catch((error) => {
      res.status(400).send({
        success: false,
        error: "Unfortunatly, there is a problem now. please try later again",
      } as NewPasswordReqError);
    });
}
