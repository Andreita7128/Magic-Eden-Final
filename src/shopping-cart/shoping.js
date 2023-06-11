import {
    getProductsShoppingCart,
    deleteProductCart
} from '../firebase'

let productsCart = [];
await retrieveProductsCart();
renderProducts();

async function retrieveProductsCart() {
    productsCart = await getProductsShoppingCart();
}

function renderProducts() {

    const container = document.getElementById('container-shopping');
    container.textContent = '';


    if (productsCart.length > 0) {

        for (let i = 0; i < productsCart.length; i++) {
            const product = productsCart[i];

            console.log(product);
            
            const component = document.createElement('product-cart');
            console.log(product.cryptocurrency);

            component.setAttribute('picture', product.url);
            component.setAttribute('name', product.name);
            component.setAttribute('collection', product.collection);
            component.setAttribute('crypto', product.cryptocurrency);
            component.setAttribute('price', product.price);

            container.appendChild(component);
        }
    } else {
        const component = document.createElement('product-cart');
        console.log('hh');
        container.appendChild(component);
    }



}

function deleteProduct() {
    const btnTrash = document.getElementById('btn-trash');

    btnTrash.addEventListener('click', async () => {
        productsCart.forEach((product) => {
            if(product.name){}
        })
        await deleteProductCart()
    })
}