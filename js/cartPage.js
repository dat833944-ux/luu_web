function renderCart() {
    const cart = getCart();
    const container = document.getElementById("cart-list");
    if (!container) return;
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Giỏ hàng trống!</p>";
        return;
    }

    cart.forEach(item => {
        const row = document.createElement("div");
        row.classList.add("cart-item", "d-flex", "align-items-center", "mb-3");
        row.innerHTML = `
            <img src="${item.image}" class="me-3" style="width:80px; height:80px; object-fit:cover;">
            <div class="flex-grow-1">
                <h5>${item.name}</h5>
                <p>Giá: ${item.price.toLocaleString('vi-VN')}đ</p>
                <p>Số lượng: ${item.quantity}</p> 
            </div>
            <button class="btn btn-danger btn-delete">Xóa</button>
        `;
        container.appendChild(row);

        row.querySelector(".btn-delete").addEventListener("click", () => {
            removeFromCart(item.id);
        });
    });

    let buyDiv = document.getElementById("cart-buy");
    if (!buyDiv) {
        buyDiv = document.createElement("div");
        buyDiv.id = "cart-buy";
        buyDiv.classList.add("mt-3");
        const btnBuy = document.createElement("button");
        btnBuy.classList.add("btn", "btn-success", "btn-lg");
        btnBuy.innerText = "Mua ngay / Thanh toán";
        btnBuy.addEventListener("click", () => {
            window.location.href = "checkout.html"; // dẫn tới form thanh toán
        });
        buyDiv.appendChild(btnBuy);
        container.appendChild(buyDiv);
    }
}

document.addEventListener("DOMContentLoaded", renderCart);