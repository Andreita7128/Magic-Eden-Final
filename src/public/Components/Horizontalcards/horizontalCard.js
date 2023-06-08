class cardHorizontal extends HTMLElement {
  connectedCallback() {
    this.getData();
  }

  async getData() {
    try {
      const response = await fetch('https://nftproducts.free.beeceptor.com/nfts');
      const data = await response.json();
      this.renderCards(data.products);
    } catch (error) {
      console.error(error);
    }
  }
  
  renderCards(products) {
    console.log("goe")
    const container = document.createElement('div');
    container.classList.add('s-finished-auctions');
    products.forEach((product) => {
      const card = this.createHorizontalCard(product.image, product.name, product.description, product.price, product.currency);
      container.appendChild(card);
    });
    this.appendChild(container);
  }

  createHorizontalCard(imageUrl, name, description, price, cryptocurrency) {
    const card = document.createElement('div');
    card.classList.add('card-horizontal');

    const image = document.createElement('img');
    image.classList.add('card__nftImage')
    image.src = imageUrl;

    const nameEl = document.createElement('h1');
    nameEl.classList.add('card__nftName')
    nameEl.textContent = name;

    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('card__description')
    descriptionEl.textContent = description;

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('card__price-container');

    const priceEl = document.createElement('p');
    priceEl.classList.add('card__price')
    priceEl.textContent = `Ended: ${price} ${cryptocurrency}`;

    priceContainer.appendChild(priceEl);

    card.appendChild(image);
    card.appendChild(nameEl);
    card.appendChild(descriptionEl);
    card.appendChild(priceContainer);

    return card;
  }
}

customElements.define('card-horizontal', cardHorizontal);
export default cardHorizontal;