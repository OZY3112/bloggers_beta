const firebaseConfig = {
  apiKey: "AIzaSyAIdgbPi1IP9YgPKK8k8G_WiPhEcNtHG9o",
  authDomain: "bloggers-7488c.firebaseapp.com",
  projectId: "bloggers-7488c",
  storageBucket: "bloggers-7488c.appspot.com",
  messagingSenderId: "200715862160",
  appId: "1:200715862160:web:5bfc7afd8629f719645815",
};
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useState, useEffect, useLayoutEffect, useTransition } from "react";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
//addDoc(collection(db, "example"), {info}, "name of doc")

const useFirebase = () => {
  const useAuth = () => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      return onAuthStateChanged(auth, (user) => setCurrentUser(user));
    }, []);
    return currentUser;
  };

  const currentUser = useAuth();
  const [isPending, startTransition] = useTransition();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [PhotoUrl, setPhotoUrl] = useState();
  const usersColRes = collection(db, "users");
  const blogsColRes = collection(db, "blogs");
  const userName = currentUser?.displayName;

  const router = useRouter();
  const handleLogOut = () => {
    return signOut(auth);
  };
  const handleGoogleAuth = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  const checkCurrentUser = () => {
    // if (currentUser) {
    //   router.push("/blogs");
    // } else {
    //   router.push("/login");
    // }
  };
  useEffect(() => {
    setPhotoUrl(currentUser?.photoURL);
  }, [currentUser]);

  const [postType, setPostType] = useState("");

  return {
    currentUser,
    err,
    loading,
    PhotoUrl,
    userName,
    checkCurrentUser,
    handleLogOut,
    handleGoogleAuth,
  };
};
export default useFirebase;
