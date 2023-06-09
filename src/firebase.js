// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app)


export async function getNfts() {
    const allNfts = [];

    const querySnapshot = await getDocs(collection(db, "nfts"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        allNfts.push({...doc.data(), id: doc.id });
    });

    return allNfts;
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

