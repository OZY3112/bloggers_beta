import { useState } from "react";
import jwt_decode from "jwt-decode";
import useAuthStore from "../stores/authStore";

export default function useApp() {
  const { userProfile, addUser } = useAuthStore();

  return {  };
}
