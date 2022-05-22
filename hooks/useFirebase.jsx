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
// import {} 'firebase/storage'
import { Dropzone } from "@mantine/dropzone";
import { Group, Text } from "@mantine/core";
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
    // if (currentUser) {
    //   router.push("/blogs");
    // } else {
    //   router.push("/login");
    // }
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
  const usePostTab = () => {
    const [loading, setLoading] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [postContent, setPostContent] = useState("");
    const nextStage = () => setCurrentStage(currentStage + 1);
    const prevStage = () => setCurrentStage(currentStage - 1);
    const postAndGetImageUrl = () => {};
    const Stages = () => {
      if (currentStage === 1) {
        return (
          <div className="">
            <h1 className="">what type of post would you like to post?</h1>
            <div className="flex">
              <button
                className="form-btn"
                onClick={() => {
                  setPostType("photo");
                  nextStage();
                }}
              >
                Photo
              </button>
              <button
                className="form-btn"
                onClick={() => {
                  setPostType("code");
                  nextStage();
                }}
              >
                Code
              </button>
              <button
                className="form-btn"
                onClick={() => {
                  setPostType("text");
                  nextStage();
                }}
              >
                text
              </button>
            </div>
          </div>
        );
      } else if (currentStage === 2) {
        if (postType === "photo") {
          const dropzoneContent = (status) => {
            return (
              <Group
                position="center"
                spacing="xl"
                style={{ minHeight: 220, pointerEvents: "none" }}
              >
                <div>
                  <Text size="xl" inline>
                    Drag images here or click to select files
                  </Text>
                  <Text size="sm" color="dimmed" inline mt={7}>
                    you can only submit 1 image per post
                  </Text>
                </div>
              </Group>
            );
          };
          return (
            <Dropzone
              onDrop={(files) => console.log("accepted files", files)}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={3 * 1024 ** 2}
              className={` w-1/2 rounded-xl `}
            >
              {(status) => dropzoneContent(status)}
            </Dropzone>
          );
        } else if (postType === "code") {
          return (
            <div className="w-1/2">
              <textarea
                className="w-full h-full rounded-xl"
                placeholder="Write your code here"
              />
            </div>
          );
        } else if (postType === "text") {
          return;
        }
      } else if (currentStage === 3) {
      }
    };
    const handlePost = () => {};
    return {
      handlePost,
      setPostType,
      nextStage,
      prevStage,
      Stages,
      currentStage,
      postType,
    };
  };
  /*
  types of posts:
  --code
  --photo
  --text

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
    usePostTab,
    checkCurrentUser,
    handleLogOut,
    handleGoogleAuth,
    getUserDoc,
  };
};
export default useFirebase;
