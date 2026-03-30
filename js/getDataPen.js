import { renderPenProduct } from "./renderPenProduct.js";
import { callPagination } from "./pagination.js";

fetch("../data/pen-product.json")
    .then(r => r.json())
    .then(data => {
        callPagination(data, renderPenProduct);
    });