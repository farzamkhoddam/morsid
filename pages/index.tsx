import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Home Page Title"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{"Home Page"}</main>
    </>
  );
}
