// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIdgbPi1IP9YgPKK8k8G_WiPhEcNtHG9o",
  authDomain: "bloggers-7488c.firebaseapp.com",
  projectId: "bloggers-7488c",
  storageBucket: "bloggers-7488c.appspot.com",
  messagingSenderId: "200715862160",
  appId: "1:200715862160:web:5bfc7afd8629f719645815",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { useState, useEffect, useTransition } from "react";

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
  const [currentUserDoc, setCurrentUserDoc] = useState();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [PhotoUrl, setPhotoUrl] = useState();
  const [followersArray, setFollowersArray] = useState([]);
  const [followingArray, setFollowingArray] = useState([]);
  const [likesArray, setLikesArray] = useState([]);
  const [userDoc, setUserDoc] = useState([]);
  let userName = currentUser?.displayName;
  let userEmail = currentUser?.email;
  let userUid = currentUser?.uid;
  const usersColRef = collection(db, "users");
  const router = useRouter();

  const checkCurrentUser = () => {
    if (currentUser) {
      router.push("/blogs");
    } else {
      router.push("/login");
    }
  };

  const handleLogOut = () => {
    return signOut(auth).then(() => setUserDoc([]));
  };
  const AddNewUserDoc = async () => {
    const userUid = currentUser?.uid;
    const usersDocRef = doc(db, "users", userUid);
    await setDoc(usersDocRef, {
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
  const getUserDoc = async () => {
    const q = query(usersColRef, where("uid", "==", userUid));
    const data = await getDocs(q);
    setUserDoc(data.docs.map((user) => ({ ...user.data(), id: user.uid })));
  };
  // console.log(userDoc);

  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(() => {
        checkCurrentUser();
        AddNewUserDoc();
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    setPhotoUrl(currentUser?.photoURL);
  }, [currentUser]);

  //posts configuration
  const postsColRef = collection(db, "ports");
  const [postType, setPostType] = useState("");
  /*
  types of posts:
  --code
  --photo
  --text

  ex:
  {type: "code || photo || text", content: "", imageUrl || code || null: ""}
  use the storage bucket from firebase to store images, get their urls, 
  reference them in the posts collection.

  thought:
  remember to use highlight.js to highlight code posts
  should i added code posts?
  maybe as a extra feature
  */

  return {
    currentUser,
    err,
    loading,
    PhotoUrl,
    userName,
    userDoc,
    checkCurrentUser,
    handleLogOut,
    handleGoogleAuth,
    getUserDoc,
  };
};
export default useFirebase;
