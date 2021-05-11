import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { FREE_TIMES } from "pageComponents/expert/Interfaces";

interface SuccessResponse {
  success: true;
  data: FREE_TIMES;
}
interface ErrorResponse {
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

  const { user, timezone } = req.body;
  axios
    .post(`${process.env.BASE_URL}/api/free_times/`, {
      user,
      timezone,
    })
    .then((resp) => {
      res
        .status(200)
        .json({ success: true, data: resp.data } as SuccessResponse);
      return;
    })
    .catch((error) => {
      if (error?.response?.data?.error) {
        // Request made and server responded
        res.status(400).send({
          success: false,
          error: error.response.data.error,
        } as ErrorResponse);
      } else {
        res.status(400).send({
          success: false,
          error: "Unfortunatly, there is a problem now. please try later again",
        } as ErrorResponse);
      }
    });
}
