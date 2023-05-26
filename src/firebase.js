// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMoTrnEveh71kOKABSkPmTnyYv-YLyPTk",
    authDomain: "magic-eden-nfts.firebaseapp.com",
    databaseURL: "https://magic-eden-nfts-default-rtdb.firebaseio.com",
    projectId: "magic-eden-nfts",
    storageBucket: "magic-eden-nfts.appspot.com",
    messagingSenderId: "394649687313",
    appId: "1:394649687313:web:9fe760cdc0808e598268b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// async function getData() {
//     try {
//         const response = await fetch('https://magic-eden-nfts-default-rtdb.firebaseio.com/products.json');
//         const data = await response.json();
//         data.map(elem => {
//             const docRef = addDoc(collection(db, "nfts"), elem);
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }
//getData()
