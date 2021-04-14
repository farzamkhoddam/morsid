import "../styles/style.scss";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import TagManager from "react-gtm-module";
import Router, { useRouter } from "next/router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

const tagManagerArgs = {
  gtmId: "GTM-XXXXXX",
};

const queryClient = new QueryClient();
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  //در بار اولی که صفحه ساخته میشه روتر کوئری خالیه. به همین دلیل به این یوزافکت احتیاج داریم
  // useEffect(() => {
  //   if (Object.keys(router.query).length > 0) {
  //     const utmReferrer = router?.query["utm_referrer"];

  //     if (utmReferrer)
  //       lscache.set(KEYs.utmReferrer, utmReferrer.toString(), 1 * 60 * 24 * 7); // expiration for a week
  //   }
  // }, [router.query]);
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
