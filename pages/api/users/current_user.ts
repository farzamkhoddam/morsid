import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getTokenCookie } from "utils/auth-cookie";

export interface RegisterReqError {
  success: false;
  error: string[];
}
export default async function GetUserData(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  const token = getTokenCookie(req);

  axios
    .post(
      `${process.env.BASE_URL}/backendapi/current_user/`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    )
    .then((resp) => {
      res.status(200).json({ success: true });
      return;
    })
    .catch((error) => {
      if (error.response) {
        // Request made and server responded
        console.log(error?.response?.data);
        res.status(400).send({
          success: false,
          ...error?.response?.data,
        } as RegisterReqError);
      } else {
        res.status(400).send({
          success: false,
          error: [
            "Unfortunatly, there is a problem now. please try later again",
          ],
        } as RegisterReqError);
      }
    });
}
