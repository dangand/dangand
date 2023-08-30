import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

import LoadingTop from "@/components/data-display/loading-top";
import PrivateLayout from "@/middleware/private_layout";
import QueryClientProviders from "@/utils/query-provider";
import TranslationProvider from "@/utils/translation-provider";
import { Hydrate } from "@tanstack/react-query";

import * as gtag from "../libs/gtag";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    gtag.gtmVirtualPageView(mainDataLayer);
  }, [router.pathname, pageProps]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProviders>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-GR205F678R"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GR205F678R', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Hydrate state={pageProps.dehydratedState}>
        <TranslationProvider>
          <LoadingTop />
          <PrivateLayout>
            <Component {...pageProps} />
          </PrivateLayout>
        </TranslationProvider>
      </Hydrate>
    </QueryClientProviders>
  );
}
