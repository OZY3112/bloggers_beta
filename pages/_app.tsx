import "../styles/globals.css";
import create from "zustand";
import { useAuth, useSignOut } from "../firebase/firebase";
import { useState, useEffect } from "react";
function MyApp({ Component, pageProps }) {
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
  photoURL: () => set(() => currentUser?.photoURL),
  // signOut: () => set(() => useSignOut())
}));
export default MyApp;
