export class AuctionCard extends HTMLElement {
  constructor() {
    super();
    this.nfts = [];
    this.filteredNfts = [];
  }

  connectedCallback() {
    this.filterButtons = document.querySelectorAll('.filter-button');
    this.collectionSelect = document.querySelectorAll('.collection-dropdown');
    this.priceSelect = document.querySelectorAll('.price-dropdown');
    this.getData()

    this.addEventListener('click', () => {
      window.location.href = '../../../infoNFT.html';
    });
  }

  async getData() {
    const card = document.querySelector('.auction-card');
    if (card) {
      const bidButton = card.querySelector('.bid-button');
      bidButton.addEventListener('click', this.handleBidButtonClick);
    }
    try {
      const response = await fetch('https://magic-eden-nfts-default-rtdb.firebaseio.com/products.json');
      const data = await response.json();
      this.nfts = Object.values(data);
      this.filteredNfts = [...this.nfts]
      console.log(this.filteredNfts)
      this.renderCards(this.filteredNfts);
    } catch (error) {
      console.error(error);
    }
    /*
    getData() {
      const card = document.querySelector('.auction-card');
      if (card) {
        const bidButton = card.querySelector('.bid-button');
        bidButton.addEventListener('click', this.handleBidButtonClick);
      }
    }
    */
    this.filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        this.filterButtons.forEach((button) => button.classList.remove('active'));
        button.classList.add('active');
        const selectedCategory = button.getAttribute('data-category');
        this.filterProducts(selectedCategory);
      });
    });

    //escucha las opciones de las colecciones
    console.log(this.collectionSelect)
    this.collectionSelect.forEach(dropdown => {
      dropdown.addEventListener('click', async () => {
        const category = dropdown.getAttribute('data-category');
        const priceRange = document.querySelector('.price-dropdown.active').getAttribute('value');
        const products = await fetchProducts(category, priceRange);
        updateProductCards(products);
      });
    });
    /*
     this.collectionFilter.addEventListener("click", () => {
       const selectedCollection = this.collectionFilter.dataset.category;
       const filteredData = filterByCollection(this.filteredNfts, selectedCollection);
       renderCards(filteredData);
     });
     */
    /*
    this.collectionSelect.options.forEach((drop) => {
      drop.addEventListener('change', () => {
        console.log(this.collectionSelect, 'hola')
        const selectedCollection = this.collectionSelect.value;
      this.filterByCollection(selectedCollection);
      });
    });*/

    /*
        this.collectionSelect.addEventListener('change', () => {
          const selectedCollection = this.collectionSelect.value;
          this.filterByCollection(selectedCollection);
        });
    
    */
    //escucha las opciones del rango de precio
    this.priceSelect.addEventListener('change', () => {
      const selectedPriceRange = this.priceSelect.value;
      this.filterByPriceRange(selectedPriceRange);
    });

  }

  filterByCollection(data, collection) {
    if (collection === "all") {
      return data;
    } else {
      return data.filter(item => item.collection === collection);
    }
  }


  renderCards(products) {
    console.log('rendering');
    // Set to default the html content to empty, then render everything up
    this.innerHTML = `<style>
    @import url('auctionCard.css');
  </style>`;
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('auction-container');
    this.appendChild(cardContainer);
    products.forEach((nft, index) => {
      let url = "./infoNFT.html?id=" + index;
      const link = document.createElement('a')
      link.href = url;
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
      link.appendChild(card)
      cardContainer.appendChild(link);


    });
  }


  filterByCryptocurrency(crypto) {
    return this.nfts.filter(n => n.cryptocurrency === crypto);
  }

  //filtrado de la colección
  filterByCollection(collection) {
    if (collection === 'all') {
      this.filteredNfts = [...this.nfts];
    } else {
      this.filteredNfts = this.nfts.filter(n => n.collection === collection);
      console.log(this.filteredNfts)
    }
    const selectedCategory = document.querySelector('.filter-button.active').getAttribute('data-category');
    if (selectedCategory === 'all') {
      this.renderCards(this.filteredNfts);
    } else {
      this.filterProducts(selectedCategory);
    }
  }


  /*

filterCollections(name){
  const nfts = this.nfts
  console.log(category);
  console.log(nfts)
  switch (name) {
    case 'okay':
      this.renderCards(this.filterByCollection('okay-bears'));
      break;
    case 'block':
      this.renderCards(this.filterByCollection('blockstars'));
      break;
    case 'naka':
      this.renderCards(this.filterByCollection('nakamigos'));
      break;
      case 'soul':
        this.renderCards(this.filterByCollection('soul-dogs'));
        break;
      case 'dao':
        this.renderCards(this.filterByCollection('viktordao'));
        break;
      case 'naka':
        this.renderCards(this.filterByCollection('node-monkey'));
        break;
        case 'block':
          this.renderCards(this.filterByCollection('mutant-ape'));
          break;
        case 'naka':
          this.renderCards(this.filterByCollection('doodles'));
          break;
          case 'soul':
            this.renderCards(this.filterByCollection('degods'));
            break;
          case 'dao':
            this.renderCards(this.filterByCollection('yoots'));
            break;
          case 'naka':
            this.renderCards(this.filterByCollection('jomohippo'));
            break;
    default:
      this.renderCards(nfts)
      break;
  }
}
*/

  //filtrado del precio


  filterProducts(category) {
    const nfts = this.nfts
    console.log(category);
    console.log(nfts)
    switch (category) {
      case 'sol':
        this.renderCards(this.filterByCryptocurrency('SOL'));
        break;
      case 'eth':
        this.renderCards(this.filterByCryptocurrency('ETH'));
        break;
      case 'btc':
        this.renderCards(this.filterByCryptocurrency('BTC'));
        break;
      default:
        this.renderCards(nfts)
        break;
    }
  }
}

/*
 case 'price':
        this.renderCards(nfts.sort((a, b) => b.price - a.price));
        break;
        */
customElements.define('auction-card', AuctionCard);
export default AuctionCard;