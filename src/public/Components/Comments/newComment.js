class NewComment extends HTMLElement {
    constructor() {
        super();
        this.picture = '';
        this.name = '';
    }


    connectedCallback() {
        this.picture = this.getAttribute('picture');
        this.name = this.getAttribute('name');

        if (this.picture === null) {
            this.picture = 'https://img.freepik.com/iconos-gratis/usuario_318-159711.jpg';
            this.name = 'Invitado';
        }

        this.render()
    }


    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="../../../public/Components/Comments/comment.css">
    <article id="comment">
                <p id="comment_user"> ${this.name}</p>
                <section id="comment_body">
                    <img style="width:10%" src=${this.picture}>
                    <div id="comment_text">
                        <input type="text" class="input-comment" id="input-comment" placeholder="Escribe tu comentario aquí...">
                    </div>
                </section>
            </article>
    `

    }
}


customElements.define('new-comment', NewComment)
export default NewComment