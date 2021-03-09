import { GetServerSideProps } from "next";

import { fetchViwer, Viewer_viewer as User } from "wpapi";
import { getTokenCookie } from "utils/auth-cookie";
import { Redirect } from "next";
import { useRouter } from "next/router";
import { UnsubscribeView } from "pageComponents/Unsubscribe/View";

interface Props {
  user?: User;
}

export default function EditProfile({ user }: Props) {
  const router = useRouter();
  if (!user) {
    return null;
  }

  const { email } = user;
  if (!email) router.replace("/");
  return <UnsubscribeView user={user} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const token = getTokenCookie(req);
  const redirect: { redirect: Redirect } = {
    redirect: {
      statusCode: 302,
      destination: "/login",
    },
  };

  if (!token) {
    return redirect;
  }

  const [{ data }] = [
    await fetchViwer({
      clientConfig: () => ({ headers: { Authorization: `Bearer ${token}` } }),
    }),
  ];

  if (!data?.data.viewer) {
    return redirect;
  }

  return {
    props: {
      user: data.data.viewer,
    },
  };
};
