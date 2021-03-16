import { NextApiRequest, NextApiResponse } from "next";
import { fetchPosts } from "../../../wpapi";
import { getTokenCookie } from "utils/auth-cookie";

export default async function fetchPlaybooks(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.status(405).send({ success: false });
    return;
  }

  try {
    const token = getTokenCookie(req);

    const { first: _first = "", after = "" } = req.query;
    const first = parseInt(_first.toString(), 10);

    const { data } = await fetchPosts({
      clientConfig: () => ({
        headers: { Authorization: token ? `Bearer ${token}` : null },
      }),
      variables: {
        first: first >= 20 || first <= 0 ? 20 : first,
        after: after.toString(),
      },
    });

    if (data?.data.posts) {
      res.status(200).json({ success: true, data: data.data });
      return;
    }
  } catch (e) {
    console.log(e);
  }

  res.status(500).send({ success: false });
}
