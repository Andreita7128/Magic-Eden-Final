import {
    initializeApp
} from "firebase/app";
import {
    getFirestore, collection, addDoc, doc, setDoc, getDocs
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
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app)
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

export async function addData() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export async function addNft(nft) {
    try {
        const docRef = await addDoc(collection(db, "nfts"), nft);

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function addNftWithId(nft, id) {
    try {
        const imageUrl = await uploadFile(file.name, file, 'nfts');

        await setDoc(doc(db, "nfts", id), {...nft, url: imageUrl });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function addNft(nft) {
    try {
        const docRef = await addDoc(collection(db, "nfts"), nft);

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function addNftWithId(nft, id) {
    try {
        const imageUrl = await uploadFile(file.name, file, 'nfts');

        await setDoc(doc(db, "nfts", id), {...nft, url: imageUrl });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
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
