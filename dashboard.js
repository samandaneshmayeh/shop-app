import authHandler from "./utiles/authorization.js";

const init = () => {
    authHandler();
}

document.addEventListener("DOMContentLoaded", init);