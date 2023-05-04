import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJhglR6HX3aNvbcQAcqtAdg3gtZ_ZP284",
  authDomain: "quothskateshop-e1db0.firebaseapp.com",
  projectId: "quothskateshop-e1db0",
  storageBucket: "quothskateshop-e1db0.appspot.com",
  messagingSenderId: "642803005871",
  appId: "1:642803005871:web:d1ef6452bbe398ff1e575a",
  measurementId: "G-K4M4XF631T",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
