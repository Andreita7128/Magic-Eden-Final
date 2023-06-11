import {
    getProductsShoppingCart,
    shoppingCartNoCheck
} from '../firebase'

let productsCart = [];
await retrieveProductsCart();
renderProducts();

async function retrieveProductsCart() {
    productsCart = await getProductsShoppingCart();
}

function renderProducts() {

    for (let i = 0; i < productsCart.length; i++) {
        const element = productsCart[i];
        const container = document.getElementById('container-shopping');

        container.innerHTML = '';

        productsCart.forEach((product) => {
            const card = document.createElement('div');
            card.classList.add('card');
            const nftImage = document.createElement('img');
            nftImage.classList.add('card__nftImage');
            nftImage.src = product.url;

            const nftName = document.createElement('h1');
            nftName.classList.add('card__nftName');
            nftName.textContent = product.name;

            const collectionName = document.createElement('h2');
            collectionName.classList.add('card__collectionName');
            collectionName.textContent = product.collection;

            const priceElement = document.createElement('p');
            priceElement.classList.add('card__price');
            priceElement.textContent = `${product.price} ${product.cryptocurrency}`;

            card.appendChild(nftImage);
            card.appendChild(nftName);
            card.appendChild(collectionName);
            card.appendChild(priceElement);
            container.appendChild(card);
        })
    }

}