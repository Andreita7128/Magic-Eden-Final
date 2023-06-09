class Comment extends HTMLElement {
    constructor() {
        super();
        this.picture = '';
        this.name = '';
        this.comment = '';
        this.likes;
        this.isChange = false;
        this.counter = null;
        this.icon = null;
    }

    connectedCallback() {
        this.picture = this.getAttribute('picture');
        this.name = this.getAttribute('name');
        this.comment = this.getAttribute('comment');
        this.likes = this.getAttribute('likes');


        if (this.name === '') {
            this.renderEmpty();
        } else {
            this.render()
        }
    }

    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="../../../public/Components/Comments/comment.css">
    <article id="comment">
            <p id="comment_user"> ${this.name}</p>
            <section id="comment_body">
            <div id="comment_img_container">
                    <img id="comment_img" src=${this.picture}>
                </div>
                <div id="comment_text">
                    <p id="comment_comment"> ${this.comment} </p>
                </div>
            </section>
            <section id="comment_reactions">
                <div id="comment_likes">
                    <i id='like' class="bi bi-heart"></i>
                    <p id="comment_number"> ${this.likes}</p>
                </div>
                <i class="bi bi-three-dots"></i>
            </section>
        </article>
    `
        this.counter = this.querySelector('#comment_number');
        this.icon = this.querySelector('#like');

        if (this.likes) {
            this.counter.textContent = this.likes;
        }

        this.icon.addEventListener('click', () => {
            if (this.isChange) {
                this.icon.className = 'bi bi-heart';
                this.likes--;
                this.counter.textContent = this.likes;
                this.isChange = false;
            } else {
                this.icon.className = 'bi bi-heart-fill';
                this.likes++;
                this.counter.textContent = this.likes;
                this.isChange = true;
            }
        });
    }

    renderEmpty() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../../public/Components/Comments/comment.css">
        <article id="comment">
            <p id="comment_noComment"> ¡Parece que está un poco vacío por acá, sé el primero en comentar! </p>
            </article>
    `
    }
}


customElements.define('comments-product', Comment)
export default Comment