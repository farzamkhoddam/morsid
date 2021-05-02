import "../styles/style.scss";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import TagManager from "react-gtm-module";
import Router, { useRouter } from "next/router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { useEffect } from "react";
import { ModalsContextProvider } from "contexts/modalContext";

const tagManagerArgs = {
  gtmId: "GTM-XXXXXX",
};

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <ModalsContextProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ModalsContextProvider>
  );
}

export default MyApp;
