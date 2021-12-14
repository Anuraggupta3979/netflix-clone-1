import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDgdPkuaTi4-hykA1RnjesgHu2A6a3Kv9s",
  authDomain: "netflix-clone-b4d81.firebaseapp.com",
  projectId: "netflix-clone-b4d81",
  storageBucket: "netflix-clone-b4d81.appspot.com",
  messagingSenderId: "402597627398",
  appId: "1:402597627398:web:4129cbf5d010b1f490a587",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
