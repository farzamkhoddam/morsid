import { GetServerSideProps } from "next";

import { useRouter } from "next/router";
import { fetchViwer, Viewer_viewer as User } from "wpapi";
import { getTokenCookie } from "utils/auth-cookie";
import { useEffect } from "react";
import { removeUserData } from "utils/auth-storage";
import { AccountView } from "perPageComponenta/Account/View";

interface Props {
  user?: User | null;
}

export default function Account({ user }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    console.log("navid inja", localStorage.getItem("user_data"));
    removeUserData();
  };

  const { firstName, lastName, email } = user;

  return (
    <AccountView
      firstName={firstName}
      lastName={lastName}
      email={email}
      handleLogout={handleLogout}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = getTokenCookie(req);

  if (!token) {
    return { props: {} };
  }

  const [{ data }] = [
    await fetchViwer({
      clientConfig: () => ({ headers: { Authorization: `Bearer ${token}` } }),
    }),
  ];

  return {
    props: {
      user: data?.data?.viewer || null,
    },
  };
};
