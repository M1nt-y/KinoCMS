import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyC8ffGL_1hhf4Ye7bKcdBdrjQp1zk36Ojc",
    authDomain: "kinocms-dd864.firebaseapp.com",
    databaseURL: "https://kinocms-dd864-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kinocms-dd864",
    storageBucket: "kinocms-dd864.appspot.com",
    messagingSenderId: "333930963116",
    appId: "1:333930963116:web:3b1e42d63cbb70bed8ff09"
};

const app = initializeApp(firebaseConfig);

const secondaryApp = initializeApp(firebaseConfig, 'Secondary');

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage, secondaryApp}

