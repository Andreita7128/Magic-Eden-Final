class Comment extends HTMLElement {
    constructor() {
        super()
        this.pictureprofile = '';
        this.picture ="";
        this.username ='';
        this.comment ='';
        this.likes ='';
    }

    static get observedAttributes() {
        return [
            "pictureprofile",
            "username",
            "comment",
            "likes",
        ]
    }

    connectedCallback() {
        
        if (this.username === '') {
            console.log("hi");
            this.renderEmpty();
        } else {
            this.render()
        }
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "pictureprofile":

                this.pictureprofile = newValue

                break;

            case "username":

                this.username = newValue

                break;

            case "comment":

                this.comment = newValue

                break;
            
            case "likes":

                this.likes = newValue

                break;
        }

    }


    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="../../../public/Components/Comments/comment.css">
    <article id="comment">
            <p id="comment_user"> ${this.username}</p>
            <section id="comment_body">
            <div id="comment_img_container">
                    <img id="comment_img" src=${this.pictureprofile}>
                </div>
                <div id="comment_text">
                    <p id="comment_comment"> ${this.comment} </p>
                </div>
            </section>
            <section id="comment_reactions">
                <div id="comment_likes">
                    <i class="bi bi-heart"></i>
                    <p id="comment_number"> ${this.likes}</p>
                </div>
                <i class="bi bi-three-dots"></i>
            </section>
        </article>
    

    `
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