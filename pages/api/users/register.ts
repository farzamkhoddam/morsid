import { NextApiRequest, NextApiResponse } from "next";
import { fetchRegisterUser } from "../../../wpapi";

export default async function RegisterUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).send({ success: false });
    return;
  }

  const { firstName, lastName, email, password } = req.body;

  try {
    await fetchRegisterUser({
      variables: {
        input: {
          clientMutationId: "next",
          username: email,
          password,
          email,
          firstName,
          lastName,
        },
      },
    });
  } catch (e) {
    // TODO fix this in WP side
    const parts = e.message.split(":");
    const message = parts[parts.lenght === 1 ? 0 : 1].trim();
    res.status(400).send({ success: false, errors: [message] });
    return;
  }

  res.status(200).json({ success: true });
}
