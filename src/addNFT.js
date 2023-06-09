import { collection } from 'firebase/firestore'
import { getProducts, addNft, addNftWithId } from '/firebase.js'

let products = []
await retrieveNfts()
renderNfts()

const bgInput = document.getElementById('bg-input')
const eyesInput = document.getElementById('eyes-input')
const signatureInput = document.getElementById('signature-input')
const typeInput = document.getElementById('type-input')
const collectionInput = document.getElementById('collection-input')
const cryptoInput = document.getElementById('inputGroupSelect01')
const descripInput = document.getElementById('description-input')
const nameInput = document.getElementById('name-input')
const priceInput = document.getElementById('price-input')
const urlInput = document.getElementById('url-input')
const submitbtn = document.getElementById('submit-btn')



submitbtn.addEventListener('click', (e) => uploadNft(e))

async function retrieveNfts() {
products = await getProducts()
}

function renderNfts() {
  const cardContainer = document.querySelector('#products-container')
  cardContainer.innerHTML = ''

  products.forEach((nft) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const nftImage = document.createElement('img');
    nftImage.classList.add('card__nftImage');
    nftImage.src = nft.url;

    const nftName = document.createElement('h1');
    nftName.classList.add('card__nftName');
    nftName.textContent = nft.name;

    const collectionName = document.createElement('h2');
    collectionName.classList.add('card__collectionName');
    collectionName.textContent = nft.collection;

    const priceElement = document.createElement('p');
    priceElement.classList.add('card__price');
    priceElement.textContent = `${nft.price} ${nft.cryptocurrency}`;

    card.appendChild(nftImage);
    card.appendChild(nftName);
    card.appendChild(collectionName);
    card.appendChild(priceElement);
    cardContainer.appendChild(card);
    
  });
}

async function uploadNft(e) {
  e.preventDefault();

  const newObj = {
    attributes: {
      background: bgInput.value,
      eyes: eyesInput.value,
      signature: signatureInput.value,
      type: typeInput.value
  },
  collection: collectionInput.value,
  comments: "null",
  cryptocurrency: cryptoInput.value,
  description: descripInput.value,
  name: nameInput.value,
  price: priceInput.value,
  url: urlInput.value
}
  

  const id = newObj.name.toLowerCase().replace(/ /g, '-')

  console.log('will write object ', newObj)

  // await addProduct(newObj)
  await addNftWithId(newObj, id)
  await retrieveNfts()
  renderNfts()
}
