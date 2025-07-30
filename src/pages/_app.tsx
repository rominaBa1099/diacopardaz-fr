import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// اینو اضافه کن، چون Plasmic این Provider رو ساخته
import { ThemeContextProvider } from "../../components/plasmic/metoo/PlasmicGlobalVariant__Theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const urlTheme = new URLSearchParams(window.location.search).get("theme");
    if (urlTheme === "light" || urlTheme === "dark") {
      setTheme(urlTheme);
      document.documentElement.setAttribute("data-theme", urlTheme);
    }
  }, [router.query]);

  return (
    <PlasmicRootProvider Head={Head}>
      <ThemeContextProvider value={theme}>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </PlasmicRootProvider>
  );
}
