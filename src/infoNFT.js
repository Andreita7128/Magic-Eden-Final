import {
    getProducts,
    shoppingCartCheck,
    getProductsShoppingCart
} from './firebase.js'


let nfts = [];
let productsCart = [];
let labelH2;
let productName;
let productActual;
await retrieveNft();
await retrieveProductsCart();
renderComments();
addCart();
updateComments()

async function retrieveNft() {
    nfts = await getProducts();
}

async function retrieveProductsCart() {
    productsCart = await getProductsShoppingCart();
}


function renderComments() {
    labelH2 = document.querySelector('.product-descripcion h2');
    productName = labelH2.textContent;

    const container = document.getElementById('container-comments');
    container.textContent = '';

    for (let i = 0; i < nfts.length; i++) {
        const element = nfts[i];

        if (element.name === productName) {
            productActual = element;
            if (element.comments !== 'null') {
                console.log(element.id);
                for (let i = 0; i < element.comments.length; i++) {
                    const commentActual = element.comments[i];
                    const elem = document.createElement('comments-product');

                    elem.setAttribute('picture', commentActual.picture);
                    elem.setAttribute('name', commentActual.name);
                    elem.setAttribute('comment', commentActual.comment);
                    elem.setAttribute('likes', commentActual.likes);

                    container.appendChild(elem);
                }
            } else if (element.comments === 'null') {
                const elem = document.createElement('comments-product');
                console.log('hh');
                container.appendChild(elem);
            }
        }

    }


}

function addCart() {
    const btn = document.getElementById('shopping-cart');

    btn.addEventListener('click', async () => {
        productsCart.forEach(element => {
            if (productActual.name === element.name) {
                window.alert('Ya agregaste este elemento a tu carrito, si quieres más unidades, dirigete a tu carrito de compras y añadelos desde ahí')
            } else {
                btn.addEventListener('click', async () => {
                    await shoppingCartCheck(productActual);
                    window.alert('Tu producto se añadió exitosamente a tu carrito')
                })
            }
        });
    });

}

function updateComments() {
    const btn = document.getElementById('next-btn');
    console.log(btn);

    btn.addEventListener('click', async () => {
        await renderComments();
    });
}