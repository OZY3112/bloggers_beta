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
  doc,
  setDoc,
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
  const [followersArray, setFollowersArray] = useState([]);
  const [followingArray, setFollowingArray] = useState([]);
  const [likesArray, setLikesArray] = useState([]);
  const userName = currentUser?.displayName;
  const userEmail = currentUser?.email;
  const blogsColRef = collection(db, "blogs");
  const router = useRouter();

  const checkCurrentUser = () => {
    // if (currentUser) {
    //   router.push("/blogs");
    // } else {
    //   router.push("/login");
    // }
  };

  const handleLogOut = () => {
    return signOut(auth);
  };
  const AddNewUserDoc = async () => {
    const userUid = currentUser?.uid;
    const usersColRef = doc(db, "users", userUid);
    await setDoc(usersColRef, {
      name: userName,
      pfp: PhotoUrl,
      email: userEmail,
      uid: userUid,
      provider: currentUser?.providerId,
      followers: followersArray,
      following: followingArray,
      likes: likesArray,
    });
  };

  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(() => AddNewUserDoc())
      .then(() => checkCurrentUser());
  };

  useEffect(() => {
    setPhotoUrl(currentUser?.photoURL);
  }, [currentUser]);

  //posts configuration
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
