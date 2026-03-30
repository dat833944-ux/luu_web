function renderProductDetail(p) {
    let html = "";

    html += `
            <div class="card-body h-100">
                <div class="row">
                    <div class="col-md-4 col-12">
                        <img src="${p.image}" class="img-fluid">
                    </div>
                    <div class="col-md-8 col-12">
                        <div class="product-title d-flex pb-3">
                            <img src="../img/icon/icon_web.png" class="product-title--logo img-fluid">
                            <h4 class="ms-2">
                                ${p.name}
                            </h4>
                        </div>


                        <div class="product-rating d-flex pb-3">
                            <div class="product-rating--star pe-2">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                            </div>
                            <div class="product-rating--vote border-start ps-2 pe-2">
                                <span>${p.vote}</span> đánh giá
                            </div>
                            <div class="product-rating--sold border-start ps-2">
                                ${p.sold} đã bán
                            </div>
                        </div>

                        <div class="product-price pb-3 d-flex">
                            <h5 class="fw-bold text-success ">
                                ${p.price.toLocaleString('vi-VN')}đ
                            </h5>

                            <span class="ms-5 fw-bold">
                                <del class="text-danger">${p.originalPrice.toLocaleString('vi-VN')}đ</del>
                                ${(p.discount * 100).toFixed(0)}% off
                            </span>
                        </div>

                        <div class="product-quantity pb-4 d-flex align-items-center">
                            <span class="me-3 fw-bold">Số lượng:</span>
                            <div class="input-group" style="width: 130px;">
                                <button id="btn-minus" class="btn btn-outline-secondary" type="button">-</button>
                                <input id="product-value" type="text" class="form-control text-center" value="1">
                                <button id="btn-plus" class="btn btn-outline-secondary" type="button">+</button>
                            </div>
                        </div>

                        <div class="product-order d-flex pb-3">
                            <div class="product-order--icon d-flex">
                                <button class="btn btn-danger d-flex align-items-center"
                                    onclick='addToCart({...${JSON.stringify(p)}}, parseInt(document.getElementById("product-value").value))'>
                                    <i class="bi bi-cart fs-3"></i>
                                    <h4 class="ms-3">Thêm vào giỏ hàng</h4>
                                </button>
                                <button class="ms-5 btn btn-danger ps-5 pe-5" id="buy-now">
                                    <h4>Mua ngay</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.getElementById("product-detail").innerHTML = html;

    document.getElementById("buy-now").addEventListener("click", () => {
        const quantityInput = document.getElementById('product-value');
        const quantity = parseInt(quantityInput.value);
        addToCart(p, quantity);
        window.location.href = "checkout.html";
    });

    const btnMinus = document.getElementById('btn-minus');
    const btnPlus = document.getElementById('btn-plus');
    const quantityInput = document.getElementById('product-value');

    btnPlus.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    btnMinus.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        } else {
            alert("số lượng không được nhỏ hơn 1")
        }
    });
}

const params = new URLSearchParams(window.location.search);
const findId = params.get("id");
const category = params.get("cat");

fetch(`../data/${category}-product.json`)
    .then(r => r.json())
    .then(
        data => {
            const currentProduct = data.find(p => p.id === findId);
            if (currentProduct) renderProductDetail(currentProduct);
        }
    )