import { useState } from "react";
import jwt_decode from "jwt-decode";
import useAuthStore from "../stores/authStore";

export default function useApp() {
  const { userProfile, addUser } = useAuthStore();
  const [creds, setCreds] = useState(null);
  if (creds) {
    console.log(creds);
    let decoded = jwt_decode(creds);
    addUser(decoded);
    console.log(decoded);
  }
  return { setCreds, userProfile };
}
