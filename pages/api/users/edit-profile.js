import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getTokenCookie } from "utils/auth-cookie";

export default async function EditProfileUser(
  // req: NextApiRequest,
  // res: NextApiResponse,
  req,
  res,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  // const { firstName, lastName } = req.body;
  // console.log("navid req.body=", req);
  try {
    const token = getTokenCookie(req);
    const data = JSON.stringify({
      firstName: "DADA",
      lastName: "KAKA",
      old_pass: "Mohammad1373",
      new_pass: "Mohammad1373",
    });
    const config = {
      method: "post",
      url: "https://wp.thehustleclub.com/wp-json/pl/v1/edit_profile?v=1",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log("navid1 ", response);
      })
      .catch(function (error) {
        console.log("navid error", error);
      });

    // const result = await axios.post(
    //   `https://wp.thehustleclub.com/wp-json/pl/v1/edit_profile?v=1`,

    //   req.body,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //   },
    // );
    // console.log("navid res", result);
    res.status(200).json({ success: true });
    return;
    // res.status(200).json({ body: req.body });
  } catch (e) {
    console.log(e);
  }
  res.status(400).send({ success: false });
}
