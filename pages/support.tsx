import { GetServerSideProps } from "next";
import { fetchViwer, Viewer_viewer as User } from "wpapi";
import { getTokenCookie } from "utils/auth-cookie";
import { SupportLoginedView } from "pageComponents/Support/SupportLoginedView";
import { SupportNotLoginedView } from "pageComponents/Support/SupportNotLoginedView";

interface Props {
  user?: User;
  isLogin: boolean;
}

export default function Support({ user, isLogin }: Props) {
  if (isLogin) return <SupportLoginedView user={user || ({} as User)} />;

  return <SupportNotLoginedView />;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = getTokenCookie(req);
  const loginStatus: boolean = !!token;
  let userData: null | User = null;
  if (loginStatus) {
    try {
      const [{ data }] = [
        await fetchViwer({
          clientConfig: () => ({
            headers: { Authorization: `Bearer ${token}` },
          }),
        }),
      ];
      userData = data?.data?.viewer as User;
    } catch (e) {
      console.log("support login request failed");
    }
  }

  return {
    props: {
      user: userData,
      isLogin: loginStatus,
    },
  };
};
