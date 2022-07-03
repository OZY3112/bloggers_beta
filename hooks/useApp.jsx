import { useState } from "react";
import jwt_decode from "jwt-decode";

export default function useApp() {
  const [user, setUserInfo] = useState();

  function decodeCredentials(res) {
    console.log(res.credential);
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
    setUserInfo(decoded);

  }
  return { decodeCredentials, user };
}
