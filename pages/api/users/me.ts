import { NextApiRequest, NextApiResponse } from "next";
import { fetchViwer } from "../../../wpapi";
import { getTokenCookie } from "utils/auth-cookie";

export default async function RegisterUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  try {
    const token = getTokenCookie(req);
    if (token) {
      const { data } = await fetchViwer({
        clientConfig: () => ({ headers: { Authorization: `Bearer ${token}` } }),
      });

      if (data?.data.viewer) {
        res.status(200).json({ success: true, user: data.data.viewer });
        return;
      }
    }
  } catch (e) {
    console.log(e);
  }

  res.status(401).send({ success: false });
}
