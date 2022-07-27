import Head from "next/head";
import PostTab from "../compos/PostTab";
import HomeBlogs from "../compos/HomeBlogs";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import useAuthStore from "../stores/authStore";
import jwtDecode from "jwt-decode";
import useSettings from "../stores/settingStore";

export default function Home() {
  const { postTabOpen } = useSettings();
  const { addUser }: any = useAuthStore();

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
          <HomeBlogs />
        </div>
      </div>
      {postTabOpen && <PostTab />}
    </>
  );
}
