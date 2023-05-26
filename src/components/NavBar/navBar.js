class NavBar extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../../public/Components/NavBar/navbar.css">
        <nav>
            <img src="/img/aLVARO.png" alt="" width="15%">
            <input type="search" class="inputSearch" placeholder="Search collections and creators">
            <ul>
                <!---Cada # se le tiene que asignar a la sección-->
                <li><a class="home-button" href="../../../landing.html">Home</a></li>
                <li><a href="#launchpad">Launchpad</a></li>
                <li><a href="#auctions">Auctions</a></li>
                <li><a href="#stats">Stats</a></li>
                <li><a class="nft-list-button" href="../../../public/Components/AuctionCards/auctionCard.html">Top Collections</a></li>
            </ul>
            <a href="https://transacciones.nequi.com/bdigital/login.jsp" class="btn_header">Connect Wallet</a>
        </nav>

        `
    }

}

customElements.define('magic-nav', NavBar)
export default NavBar