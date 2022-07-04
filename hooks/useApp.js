import { useState } from "react";
import jwt_decode from "jwt-decode";

export default function useApp() {
  const [currentUser, setCurrentUser] = useState([]);
  console.log(currentUser);
  // function addAndDecodeUserCredentials(res, addUser) {
  //   setCurrentUser(jwt_decode(res.credential));
  //   // addUser(currentUser);
  // }
  return { setCurrentUser, currentUser };
}
