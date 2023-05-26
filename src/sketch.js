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
