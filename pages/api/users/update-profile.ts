// import axios from "axios";
// import { NextApiRequest, NextApiResponse } from "next";
// import { getTokenCookie } from "utils/auth-cookie";

// export default async function EditProfileUser(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method !== "POST") {
//     res.status(405).send({ success: false });
//     return;
//   }

//   try {
//     const token = getTokenCookie(req);
//     await axios.post(
//       `https://wp.thehustleclub.com/wp-json/pl/v1/edit_profile?v=1`,
//       req.body,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       },
//     );
//     res.status(200).json({ success: true });
//     return;
//   } catch (e) {
//     console.log(e);
//   }
//   res.status(400).send({ success: false });
// }
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getTokenCookie } from "utils/auth-cookie";

export interface RegisterReqError {
  success: false;
  error: string[];
}
export default async function RegisterUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    console.log("navid inga");
    res.status(405).send({ success: false });
    return;
  }

  const { first_name, last_name, phone_number } = req.body;
  const token = getTokenCookie(req);

  axios
    .put(
      `${process.env.BASE_URL}/api/update/azardokhtziaee@gmail.com/`,
      { first_name, last_name, phone_number },
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
