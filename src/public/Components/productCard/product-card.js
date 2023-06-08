  export class CardNFT extends HTMLElement {
    constructor() {
      console.log('Constructor ejecutado');
      super();
      this.attachShadow({ mode: 'open' });
    }

    // Método cuando se agrega el componente a la página web xd
    connectedCallback() {
      this.addEventListener('click', () => {
        window.location.href = 'infoNFT.html';
      });
      this.getData();
    }

    async getData() {
      const response = await fetch('https://udemy-d3-firebase-6e372-default-rtdb.firebaseio.com/products.json');
      const data = await response.json(); // Se obtiene la respuesta y se convierte a formato JSON
      const product = data[0]; // Se obtiene la información del primer producto

      if (product) {
        this.render(product); // Si se encuentra información del producto, se llama a la función render para mostrar la información en las
      } else {
        console.error('No se encontró ningún producto en la API');
      }
    }

    render(product) {
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          @import url('productCard.css');
        </style>
    
        <article class="product-card-container">
          <div class="product-card-content">
            <img src="${product.url}" class="product-img" />
            <div class="product-descripcion">
              <h2>${product.name}</h2>
              <h2>Collection: ${product.collection}</h2>
              <p>${product.description}</p>
              <br>
              <p>Cryptocurrency: ${product.cryptocurrency}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        </article>
      `;

      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define('product-card', CardNFT);
  export default CardNFT;