import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { WiSunrise } from "react-icons/wi";
import { Provider as SupaProvider } from "react-supabase";
import { ChakraProvider } from "@chakra-ui/react";
import supabase from "../hooks/supa";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

// const Loader: any = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const handleStart = (url: string) =>
//       url !== router.asPath && setLoading(true);

//     const handleComplete = (url: string) =>
//       url === router.asPath && setLoading(false);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });
//   return (
//     loading && (
//       <div className="w-screen h-screen">
//         <div className=" motion-safe:animate-pulse text-[150px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
//           <WiSunrise className="text-yellow-300" />
//         </div>
//       </div>
//     )
//   );
// };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Loader /> */}
      <GoogleOAuthProvider clientId={`${process.env.GOOGLE_OAUTH_ID}`}>
        <SupaProvider value={supabase}>
          <ChakraProvider>
            <Component {...pageProps} />
            <div className="hidden">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              />
            </div>
          </ChakraProvider>
        </SupaProvider>
      </GoogleOAuthProvider>
    </>
  );
}
export default MyApp;
