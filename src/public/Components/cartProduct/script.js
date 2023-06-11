import {
    getProductsShoppingCart,
    deleteProductCart
} from '../../../firebase'

class ProductInCart extends HTMLElement {
    constructor() {
        super();
        this.picture;
        this.name;
        this.collection;
        this.crypto;
        this.price;
        this.id;
        this.amount = 1;
        this.products = [];
    }

    connectedCallback() {
        this.picture = this.getAttribute('picture');
        this.name = this.getAttribute('name');
        this.collection = this.getAttribute('collection');
        this.crypto = this.getAttribute('crypto');
        this.price = this.getAttribute('price');

        if (this.name === null) {
            this.renderEmpty();
        } else {
            this.render()
        }
    }

    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="../../../public/Components/cartProduct/style.css">
    
    <article id="container-product">
        <img src="${this.picture}" alt="">
        <div class="product_info">
            <div class="product_info_description">
                <h5>${this.name}</h5>
                <p class="product_info_collection">${this.collection}</p>
                <p class="product_info_cryptocurrency">${this.crypto}</p>
            </div>
            <div class="product_info_amount">
                <button id="btn-less"><i class="bi bi-dash"></i></button>
                <div class="amount">
                    <p class="amount-product" id="amount-product">${this.amount}</p>
                </div>
                <button id="btn-add"><i class="bi bi-plus"></i></button>
            </div>
            <p class="product_info_price">$${this.price}</p>
            <div class="product_info_total">
                <p id="total" >$${this.price} </p>
                <button id="btn-trash"><i class="bi bi-trash"></i></button>

            </div>
        </div>
    </article>
    `

        const btnAdd = document.getElementById('btn-add');
        const btnLess = document.getElementById('btn-less');
        const btnTrash = document.getElementById('btn-trash');
        const indexAmount = document.getElementById('amount-product');
        const total = document.getElementById('total');

        btnAdd.addEventListener('click', () => {
            this.amount += 1;
            indexAmount.textContent = this.amount;
            total.textContent = '';
            total.textContent = '$' + this.amount * this.price;
        });

        btnLess.addEventListener('click', async () => {
            this.amount--;
            indexAmount.textContent = this.amount;

            if (this.amount === 0) {
                this.products = await getProductsShoppingCart();
                this.products.forEach(async (product) => {
                    if (product.name === this.name) {
                        await deleteProductCart(product.id)
                    }
                    this.products = await getProductsShoppingCart();
                    if (this.products.length === 0) {
                        this.renderEmpty();
                    } else {
                        this.render()
                    }
                })
            }
        });

        btnTrash.addEventListener('click', async () => {
            this.products.forEach(async (product) => {
                if (product.name === this.name) {
                    await deleteProductCart(product.id)
                }
                this.products = await getProductsShoppingCart();
                console.log(this.products);

                if (this.products.length === 0) {
                    this.renderEmpty();
                } else {
                    this.render()
                }
            })
        });
    }

    renderEmpty() {
        this.innerHTML = `
    <link rel="stylesheet" href="../../../public/Components/cartProduct/style.css">
        <article id="container-product">
            <p id="container-product_not"> ¡Aún no has añadido nada a tu carrito, da un vistazo a nuestros <a href="../../Components/AuctionCards/auctionCard.html">productos</a>! </p>
            </article>
    `
    }
}


customElements.define('product-cart', ProductInCart)
export default ProductInCart