class Footer extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../../public/Components/Footer/footer.css">
        <div class="container_footer">
            <div class="container_footer_row">
                <div class="container_footer_col">
                    <figure class="container_footer_logo">
                        <img src="https://next.cdn.magiceden.dev/_next/static/media/logo.fad4cb4c.png"
                            alt="">
                    </figure>
                </div>
                <div class="container_footer_col">
                    <h4>About us</h4>
                    <ul>
                        <li><a href="#">Our history</a></li>
                        <li><a href="#">Work with us</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="container_footer_col">
                    <h4>Our services</h4>
                    <ul>
                        <li><a href="#">Launchpad</a></li>
                        <li><a href="#">Auctions</a></li>
                        <li><a href="#">Stats</a></li>
                        <li><a href="#">Top collection</a></li>
                    </ul>
                </div>
                <div class="container_footer_col">
                    <h4>Follow us</h4>
                    <div class="container_footer_social_links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `
    }

}

customElements.define('magic-footer', Footer)
export default Footer