const products = [
    { id: "p1", title: "Some products", price: 30, image: "https://picsum.photos/200/300" },
    { id: "p2", title: "some products", price: 50, image: "https://picsum.photos/200/300" },
    { id: "p3", title: "some products", price: 120, image: "https://picsum.photos/200/300" },
];

const currentUser = localStorage.getItem("currentUser");
const authNav = document.getElementById("authNav");
const productList = document.getElementById("productList");

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
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.price} AZN</p>
                    <i class="bi bi-heart heart-icon" data-product-id="${product.id}"></i>
                </div>
            </div>
        </div>
    `)

    setupWishlistListeners();
}
renderProducts();

if (window.location.pathname.includes("whislist.html")) {
    if (!currentUser) {
        showToast("Zəhmət olmasa əvvəlcə daxil olun", "linear-gradient(to right, #ff5f6d, #ffc371)");
        setTimeout(() => window.location.href = "login.html", 1500);
    } else {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
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
