import {
    getProducts,
    shoppingCartNoCheck
} from '../firebase'

let nfts = [];
await retrieveNft();
renderComments();

async function retrieveNft() {

    nfts = await getProducts();
    console.log(nfts);
}

function renderComments(id) {

    for (let i = 0; i < nfts.length; i++) {
        const element = nfts[i];

        if (element === id) {
            const container = document.getElementById('container-shopping');

            container.innerHTML = `
            `

            const elem = document.createElement('h2');
            elem.textContent = element.name;

            container.append(elem);
        }
    }

}