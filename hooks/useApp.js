import { useState } from "react";
import jwt_decode from "jwt-decode";

export default function useApp() {
  const [currentUser, setCurrentUser] = useState([]);

  function addAndDecodeUserCredentials(res, addUser) {
    setCurrentUser(jwt_decode(res.credential));
    addUser(currentUser);
  }
  console.log(currentUser);
  return { addAndDecodeUserCredentials, currentUser };
}
