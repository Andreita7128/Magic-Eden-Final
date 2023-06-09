console.log('this is the homepage')
const home = document.querySelector('.home');
const nftlist = document.querySelector('.nft-list');
setButtons()

const carousel = document.querySelector('.twitter-carousel');
//const comment = carousel.querySelectorAll('.comment');
/*
let index = 0;

let interval = setInterval(() => {
  comment[index].style.opacity = 0;
  index++;
  if (index === comment.length) {
    index = 0;
  }
  comment[index].style.opacity = 1;
}, 2000);

*/
function setButtons() {
  const buttonHome = document.querySelector('.home-button')
  const buttonNftList = document.querySelector('.nft-list-button')


  console.log(buttonNftList);

  buttonHome?.addEventListener('click', ()=> goToHome())
  buttonNftList?.addEventListener('click', ()=> goToNftList())
  

}
function goToHome() {
  nftlist.classList.add('hidden')
  home.classList.remove('hidden')
  setButtons()
}
function goToNftList() {
  nftlist.classList.remove('hidden')
  home.classList.add('hidden')
  setButtons()
}

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const authInstance = getAuth();

// Evento para iniciar sesión
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email-input').value;
  const password = document.getElementById('login-password-input').value;

  signInWithEmailAndPassword(authInstance, email, password)
  .then(async (userCredential) => {
    const user = userCredential.user;
    console.log('Usuario autenticado:', user);

    // Obtener el documento del usuario desde Firestore
    const userDocRef = doc(db, 'users', user.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const role = userData.role;

      if (role === 'usuario') {
        window.location.href = 'index.html'; // Redirigir a index.html si el rol es usuario
      } else if (role === 'administrador') {
        window.location.href = 'addNFT.html'; // Redirigir a addNFT.html si el rol es administrador
      }
    } else {
      console.error('El documento del usuario no existe en Firestore');
    }
  })
  .catch((error) => {
    console.error('Hay un error', error);
  });
});

const registerForm = document.getElementById("register-form");
const emailInput = document.getElementById("register-email-input");
const passwordInput = document.getElementById("register-password-input");
const birthdateInput = document.getElementById("birthdate-input");
const profilePicInput = document.getElementById("profile-pic-input");
const roleSelect = document.getElementById("register-role-input");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const birthdate = birthdateInput.value;
  const profilePic = profilePicInput.files[0];
  const role = roleSelect.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
    const user = userCredential.user;

    const userData = {
      email: email,
      birthdate: birthdate,
      role: role
    };

    // Guarda los datos del usuario en Firestore
    await setDoc(doc(db, "users", user.uid), userData);

    const docRef = await addDoc(collection(db, "users"), userData);

    registerForm.reset();
    alert("Cuenta creada exitosamente");
  } catch (error) {
    console.log(error);
  }
});
