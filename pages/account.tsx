import { GetServerSideProps } from "next";
import { MainLayout } from "layouts/MainLayout";
import { useRouter } from "next/router";
import { fetchViwer, Viewer_viewer as User } from "wpapi";
import { getTokenCookie } from "utils/auth-cookie";
import Button from "components/Button";
import { useEffect } from "react";

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

  const { firstName, lastName, email } = user;

  return (
    <MainLayout title="Account">
      <div className="featured-banner">
        <section className="article-header">
          <h1>Account</h1>
          <strong>{`${firstName} ${lastName} `}</strong>
          <span>({email})</span>
          <br />
          <br />
          <a href="/logout">Logout</a>
        </section>
      </div>
    </MainLayout>
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

  console.log(data, token);

  return {
    props: {
      user: data?.data?.viewer || null,
    },
  };
};
