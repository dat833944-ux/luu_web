export function renderPenProduct(products) {
    let html = "";

    products.forEach(p => {

        const img = p.image || "../img/product_img/default.png";

        html += `
            <div class="col-6 col-md-3 col-lg-3 mb-3">
                <div class="product card shadow">
                    <div class="card-body">

                        <div class="card-head mb-1 d-flex justify-content-center">
                            <img src="${img}" alt="">
                        </div>

                        <div class="product-title mb-4">
                            <a href="#">${p.name}</a>
                        </div>

                        <div class="d-flex justify-content-between mb-3">
                            <div class="text-danger">
                                ${p.price.toLocaleString('vi-VN')}đ
                            </div>
                            <div class="sold fw-bold">
                                Đã bán ${p.sold}
                            </div>
                        </div>

                        <div class="price-sold d-flex justify-content-between">

                        <button class="btn btn-success"
                            onclick='addToCart(${JSON.stringify(p)})'>
                            <i class="bi bi-cart-plus"></i>
                        </button>

    <a href="./product_detail.html?id=${p.id}&cat=pen" class="btn btn-primary">
        <i class="bi bi-eye"></i>
    </a>

</div>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("list-product-pen").innerHTML = html;
}