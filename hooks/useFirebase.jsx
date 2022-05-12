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
   export const db = getFirestore(app);