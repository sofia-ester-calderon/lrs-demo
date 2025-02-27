import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 
storyblokInit({
  accessToken: "CoKddvWo1GW1VD7eGQSBrgtt",
  use: [apiPlugin]
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
