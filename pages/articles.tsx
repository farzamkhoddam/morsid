import { GetServerSideProps } from "next";

import { Redirect } from "next";

export default function Articles() {
  return;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const redirect: { redirect: Redirect } = {
    redirect: {
      statusCode: 302,
      destination: "/playbooks",
    },
  };

  return redirect;
};
