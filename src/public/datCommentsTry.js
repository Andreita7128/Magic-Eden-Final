import "./Components/Components.js";
import dataComments from "./dataComments.js";
console.log(dataComments);
import {
    AttributeComment
} from "./Components/Comments/comment.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.comments = [];


        dataComments.forEach((data) => {
            const postComment = this.ownerDocument.createElement("comments-product");
            postComment.setAttribute(AttributeComment.pictureProfile, data.pictureProfile);
            postComment.setAttribute(AttributeComment.userName, data.userName);
            postComment.setAttribute(AttributeComment.comment, data.comment);
            postComment.setAttribute(AttributeComment.likes, data.likes);
            this.comments.push(postComment);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = ``;
        this.comments.forEach((comment) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(comment);
        });
    }
}
customElements.define("app-container", AppContainer);