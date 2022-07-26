import Head from "next/head";
import SideBar from "../compos/SideBar";
import PostTab from "../compos/PostTab";
import HomeBlogs from "../compos/HomeBlogs";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import useAuthStore from "../stores/authStore";
import jwtDecode from "jwt-decode";
import useApp from "../hooks/useApp";

export default function Home() {
  const { addUser }: any = useAuthStore();
  const { postTabOpen, setPostTabOpen, sidebarOpen } = useApp();

  useGoogleOneTapLogin({
    onSuccess: (res): { res: { credential: string } } =>
      addUser(jwtDecode(`${res.credential}`)),
    onError: () => console.log("sike, ur bad"),
  });
  return (
    <>
      <Head>
        <title>Cogle</title>
      </Head>
      <div className="">
        <div className="flex w-screen">
          <HomeBlogs sidebarOpen={sidebarOpen} />
        </div>
      </div>
      {postTabOpen && <PostTab setPostTabOpen={setPostTabOpen} />}
    </>
  );
}
