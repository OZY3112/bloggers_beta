import "../styles/globals.css";
import create from "zustand";
import { useAuth, useSignOut } from "../firebase/firebase";
import { useState, useEffect } from "react";
import type {AppProps} from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export const useStore = create((set) => ({
  currentUser: () => set(() => useAuth()),
  currentUserDate: () => set(() => []),
  loading: () => set(() => false),
  err: () => set(() => false),
  // signOut: () => set(() => useSignOut())
}));
export default MyApp;
