import "../styles/globals.css";
import type { AppProps } from "next/app";
import useFirebase from "../hooks/useFirebase";
import { useLayoutEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const { checkCurrentUser } = useFirebase();
  useLayoutEffect(() => {
    checkCurrentUser();
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
