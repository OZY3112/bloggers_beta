import "../styles/globals.css";
import type { AppProps } from "next/app";
import useFirebase from "../hooks/useFirebase";
import { useLayoutEffect, useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const { checkCurrentUser, getUserDoc, currentUser } = useFirebase();
  useLayoutEffect(() => {
    checkCurrentUser();
  }, [currentUser]);

  useEffect(() => {
    getUserDoc();
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
