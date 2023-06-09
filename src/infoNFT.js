import {
    getProducts,
    shoppingCartCheck
} from './firebase.js'


let nfts = [];
await retrieveNft();
renderComments('8r2llpJkw8razkC7bgPv');
addCart('8r2llpJkw8razkC7bgPv');

async function retrieveNft() {

    nfts = await getProducts();
    console.log(nfts);
}

function renderComments(id) {

    const container = document.getElementById('comments');

    for (let i = 0; i < nfts.length; i++) {
        const element = nfts[i];

        if (element.id === id) {
            if (element.comments !== 'null') {

                for (let i = 0; i < element.comments.length; i++) {
                    const comment = nfts[i];
                    const elem = document.createElement('comments-product');

                    elem.setAttribute('picture', comment.comments[i].picture);
                    elem.setAttribute('name', comment.comments[i].name);
                    elem.setAttribute('comment', comment.comments[i].comment);
                    elem.setAttribute('likes', comment.comments[i].likes);

                    container.appendChild(elem);
                }
            } else {
                const elem = document.createElement('comments-product');
                container.appendChild(elem);
            }
        }

    }


}

function addCart(id) {
    const btn = document.getElementById('shopping-cart');
    console.log(btn);

    btn.addEventListener('click', async () => {
        await shoppingCartCheck(id);
    });
}