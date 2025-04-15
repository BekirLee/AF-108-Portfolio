let allProducts = JSON.parse(localStorage.getItem('allProducts'))
console.log(allProducts);


function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(allProducts), 1000);
    });
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id")
console.log(productId);


const container = document.querySelector(".product-container");

getProducts().then((data) => {
    const product = data.find((p) => p.id === productId);

    if (!product) {
        container.innerHTML = `<h2>Product not found!</h2>`;
        return;
    }

    container.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <div class="product-details">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-category">${product.category}</p>
        <p class="product-price">${product.price} AZN</p>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">Rating: ${product.rating} ⭐</div>
        <div class="quantity-selector">
          <button id="decreaseBtn">-</button>
          <input type="number" id="quantityInput" value="1" min="1" />
          <button id="increaseBtn">+</button>
        </div>
        <button class="btn btn-success" id="addToCartBtn" data-product-id="${product.id}">Səbətə əlavə et</button>
      </div>
    `;

    const quantityInput = document.getElementById("quantityInput");
    document.getElementById("increaseBtn").addEventListener("click", () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    document.getElementById("decreaseBtn").addEventListener("click", () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    setupBasketListeners()
});


function setupBasketListeners() {
    const addButton = document.querySelector("#addToCartBtn");

    addButton.addEventListener("click", () => {
        if (!currentUser) {
            showToast("Please login to add products to basket");
            setTimeout(() => window.location.href = "./pages/login.html", 1500);
            return;
        }

        const productId = addButton.dataset.productId;
        console.log(productId);

        const product = products.find(p => p.id === productId);

        if (!product) return;

        let basket = JSON.parse(localStorage.getItem("basket")) || [];

        const existingItem = basket.find(p => p.id === product.id);

        if (existingItem) {
            existingItem.count += 1;
        } else {
            basket.push({ ...product, count: 1 });
        }

        localStorage.setItem("basket", JSON.stringify(basket));
        showToast("Product added to basket!", "linear-gradient(to right, #00b09b, #96c93d)");
    });
    // });
}
