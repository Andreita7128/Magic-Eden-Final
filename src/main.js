import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
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

// Attach a click event listener to the button

const authInstance = getAuth();

// Evento para iniciar sesión
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('login-email-input').value;
  const password = document.getElementById('login-password-input').value;
  
  signInWithEmailAndPassword(authInstance, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('Usuario autenticado:', user);
    // Realizar cualquier acción adicional después de iniciar sesión
    const button = document.getElementById('navigate-button');
    button.addEventListener('click', () => {
      // Navigate to the new page
      window.location.href = 'addNFT.html';
    });

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

    const docRef = await addDoc(collection(db, "users"), userData);
    
    registerForm.reset();
    alert("Cuenta creada exitosamente");
  } catch (error) {
    console.log(error);
  }
});



