import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getTokenCookie } from "utils/auth-cookie";

export interface ReserveReqError {
  success: false;
  error: string[];
}
export default async function ReserveMeetitg(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  const token = getTokenCookie(req);
  const { userMail, expertMail, expert, reserveDate, session_id } = req.body;
  axios
    .post(
      `https://hooks.zapier.com/hooks/catch/1929342/byfor8z/`,
      { userMail, expertMail, expert, reserveDate, session_id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    )
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
          ...error?.response?.data,
        } as ReserveReqError);
      } else {
        res.status(400).send({
          success: false,
          error: [
            "Unfortunatly, there is a problem now. please try later again",
          ],
        } as ReserveReqError);
      }
    });
}
