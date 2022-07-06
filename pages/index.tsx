import Head from "next/head";
import { useState, useEffect } from "react";
import SideBar from "../compos/SideBar";
import PostTab from "../compos/PostTab";
import HomeBlogs from "../compos/HomeBlogs";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import useApp from "../hooks/useApp";

export default function Home() {
  const { setCreds }: any = useApp();

  useGoogleOneTapLogin({
    onSuccess: (res): { res: { credential: string } } =>
      setCreds(res.credential),
    onError: () => {},
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [postTabOpen, setPostTabOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Cogle</title>
      </Head>
      <div className="">
        <div className="flex w-screen">
          <SideBar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            setPostTabOpen={setPostTabOpen}
          />
          <HomeBlogs sidebarOpen={sidebarOpen} />
        </div>
      </div>
      {postTabOpen && <PostTab setPostTabOpen={setPostTabOpen} />}
    </>
  );
}
