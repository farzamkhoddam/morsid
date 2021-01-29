import { GetServerSideProps } from "next";

import { fetchViwer, Viewer_viewer as User } from "wpapi";
import { getTokenCookie } from "utils/auth-cookie";
import { removeUserData } from "utils/auth-storage";
import { AccountView } from "pageComponents/Account/View";
import { Redirect } from "next";

interface Props {
  user?: User;
}

export default function Account({ user }: Props) {
  if (!user) {
    return null;
  }

  const handleLogout = () => {
    removeUserData();
  };

  const { firstName, lastName, email } = user;

  return (
    <AccountView
      firstName={firstName || ""}
      lastName={lastName || ""}
      email={email || ""}
      handleLogout={handleLogout}
    />
  );
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
