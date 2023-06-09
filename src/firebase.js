import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from "firebase/firestore";
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import {
    collection,
    addDoc,
    getDocs
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMoTrnEveh71kOKABSkPmTnyYv-YLyPTk",
    authDomain: "magic-eden-nfts.firebaseapp.com",
    databaseURL: "https://magic-eden-nfts-default-rtdb.firebaseio.com",
    projectId: "magic-eden-nfts",
    storageBucket: "magic-eden-nfts.appspot.com",
    messagingSenderId: "394649687313",
    appId: "1:394649687313:web:9fe760cdc0808e598268b0"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Aquí se agregó la autenticación

export {
    db,
    auth
};

export async function getProducts() {
    const allNfts = [];

    const querySnapshot = await getDocs(collection(db, "nfts"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        allNfts.push({
            ...doc.data(),
            id: doc.id
        })
    });

    return allNfts
}



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