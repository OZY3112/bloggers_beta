const firebaseConfig = {
  apiKey: "AIzaSyAIdgbPi1IP9YgPKK8k8G_WiPhEcNtHG9o",
  authDomain: "bloggers-7488c.firebaseapp.com",
  projectId: "bloggers-7488c",
  storageBucket: "bloggers-7488c.appspot.com",
  messagingSenderId: "200715862160",
  appId: "1:200715862160:web:5bfc7afd8629f719645815",
};
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
//addDoc(collection(db, "example"), {info}, "name of doc")

const useFirebase = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const usersColRes = collection(db, "users");
  const blogsColRes = collection(db, "blogs");
  const router = useRouter();
  const checkCurrentUser = () => {
    if (currentUser) {
      router.push("/");
    } else {
      router.push("/login");
    }
  };
  const handleLogOut = () => {
    return signOut(auth);
  };
  const handleGoogleAuth = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  const useAuth = () => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      return onAuthStateChanged(auth, (user) => setCurrentUser(user));
    }, []);
    return currentUser;
  };

  return {
    currentUser,
    err,
    loading,
    checkCurrentUser,
    handleLogOut,
    handleGoogleAuth,
  };
};
export default useFirebase;
