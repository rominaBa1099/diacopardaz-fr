import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark"); // مقدار پیش‌فرض

  useEffect(() => {
    const urlTheme = new URLSearchParams(window.location.search).get("theme");
    if (urlTheme === "light" || urlTheme === "dark") {
      setTheme(urlTheme);
    }
  }, []);

  return (
    <PlasmicRootProvider Head={Head} globalContexts={{ Theme: theme }}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
