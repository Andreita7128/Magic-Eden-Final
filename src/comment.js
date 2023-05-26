import dataComments from "./public/Components/Comments/dataComment/dataComment.js";

const COMMENTS = dataComments;
let products = [];

fetch('https://magic-eden-nfts-default-rtdb.firebaseio.com/products.json')
.then(response => response.json())
.then(data => {
    products = data.map(d => {
        let dCopy = {...d};
        let hasComment = Math.random() > 0.5;
        if (hasComment) {
            let indexR = Math.random() * ((6-1+1)+1)
            dCopy.comments = [COMMENTS[indexR]]
        }
        return dCopy
    })
    console.log(products)
})