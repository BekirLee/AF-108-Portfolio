const products = [
    {
        id: "p1",
        title: "Gucci Bag",
        price: 30,
        image: "data:image/jpeg;base64,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",
        description: "New brand product!",
        rating: 4.5,
        category: "fashion"
    },
    {
        id: "p2",
        title: "Computer",
        price: 3000,
        image: "data:image/jpeg;base64,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",
        description: "New computer!",
        rating: 4.5,
        category: "Technology"
    },
    {
        id: "p3",
        title: "Camera",
        price: 300,
        image: "data:image/jpeg;base64,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",
        description: "New cameras!",
        rating: 4.5,
        category: "Technology"
    },
    {
        id: "p4",
        title: "PS5",
        price: 3120,
        image: "data:image/jpeg;base64,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",
        description: "Last brand PS5!",
        rating: 4.5,
        category: "Technology"
    },
]

localStorage.setItem('allProducts', JSON.stringify(products));

const currentUser = localStorage.getItem("currentUser");
const authNav = document.querySelector("#authNav");
const productList = document.querySelector("#productList");

function showToast(message, color = "linear-gradient(to right, #ff5f6d, #ffc371)") {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: color }
    }).showToast();
}

function showNavbar() {
    if (authNav) {
        if (currentUser) {
            authNav.innerHTML = `
                <li class="nav-item"><a class="nav-link" href="#">Halo, ${currentUser}</a></li>
                <li class="nav-item"><a class="nav-link" href="./pages/whislist.html" id="wishlistLink">Wishlist</a></li>
                <li class="nav-item"><a class="nav-link" href="./pages/basket.html" id="basketLink">Basket</a></li>
                <li class="nav-item"><a class="nav-link" href="#" id="logoutBtn">Logout</a></li>
            `;
        } else {
            authNav.innerHTML = `
                <li class="nav-item"><a class="nav-link" href="./pages/login.html">Login</a></li>
                <li class="nav-item"><a class="nav-link" href="./pages/register.html">Register</a></li>
            `;
        }
    }
}
showNavbar();

document.addEventListener("click", (e) => {
    if (e.target.id === "logoutBtn") {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("wishlist");
        showToast("Log outed", "linear-gradient(to right, #ff5f6d, #ffc371)");
        setTimeout(() => window.location.reload(), 1000);
    }
});

function setupWishlistListeners() {
    const heartIcons = document.querySelectorAll(".heart-icon");
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    heartIcons.forEach(icon => {
        const productId = icon.dataset.productId;

        if (wishlist.includes(productId)) {
            icon.classList.add("active", "bi-heart-fill");
            icon.classList.remove("bi-heart");
        }

        icon.addEventListener("click", () => {
            if (!currentUser) {
                showToast("First Login", "linear-gradient(to right, #ff5f6d, #ffc371)");
                setTimeout(() => window.location.href = "./pages/login.html", 1000);
                return;
            }

            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            if (wishlist.includes(productId)) {
                wishlist = wishlist.filter(id => id !== productId);
                icon.classList.remove("active", "bi-heart-fill");
                icon.classList.add("bi-heart");
            } else {
                wishlist.push(productId);
                icon.classList.add("active", "bi-heart-fill");
                icon.classList.remove("bi-heart");
            }

            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        });
    });
}

function renderProducts() {
    if (!productList) return;

    productList.innerHTML = products.map(product => `
        <div class="col-sm-6 col-md-4 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" class="card-img-top w-100 h-300" alt="${product.title}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.price} AZN</p>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.rating}</p>
                    <p class="card-text">${product.category}</p>
                    <i class="bi bi-heart heart-icon" data-product-id="${product.id}"></i>
                    <button class="btn btn-primary mt-2 add-to-basket" data-product-id="${product.id}">
                        Add to Basket
                    </button>
                    <a href="./pages/product-detail.html?id=${product.id}">More...</a>
                </div>
            </div>
        </div>
    `).join('')

    setupWishlistListeners();
    setupBasketListeners()
}

renderProducts();

function setupBasketListeners() {
    const addButtons = document.querySelectorAll(".add-to-basket");

    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (!currentUser) {
                showToast("Please login to add products to basket");
                setTimeout(() => window.location.href = "./pages/login.html", 1500);
                return;
            }

            const productId = button.dataset.productId;
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
    });
}


if (window.location.pathname.includes("whislist.html")) {
    if (!currentUser) {
        showToast("PLz login first", "linear-gradient(to right, #ff5f6d, #ffc371)");
        setTimeout(() => window.location.href = "login.html", 1500);
    } else {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        // console.log(wishlist);

        const wishlistContainer = document.getElementById("wishlistContainer");

        if (wishlistContainer) {
            const selectedProducts = products.filter(p => wishlist.includes(p.id));
            if (selectedProducts.length === 0) {
                wishlistContainer.innerHTML = "<p class='text-center'>No such products.</p>";
            } else {
                wishlistContainer.innerHTML = selectedProducts.map(product =>
                    // console.log(product)
                    `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 shadow-sm">
                            <img src="${product.image}" class="card-img-top" alt="${product.title}">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.price} AZN</p>
                            </div>
                        </div>
                    </div>
                `)
            }
        }
    }
}
