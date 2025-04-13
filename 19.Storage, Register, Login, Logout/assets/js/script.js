document.addEventListener("DOMContentLoaded", () => {
    const authNav = document.getElementById("authNav");

    const currentUser = localStorage.getItem("currentUser");

    const showToast = (msg, color = "linear-gradient(to right, #ff5f6d, #ffc371)") => {
        Toastify({
            text: msg,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: { background: color }
        }).showToast();
    };

    if (currentUser) {
        authNav.innerHTML = `
            <li class="nav-item">
                <span class="nav-link disabled text-light">Welcome user, ${currentUser}</span>
            </li>
            <li class="nav-item">
                <button class="btn btn-outline-light btn-sm ms-2" id="logoutBtn">Log out</button>
            </li>
        `;

        const logoutBtn = document.getElementById("logoutBtn");
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            showToast("Just log out", "linear-gradient(to right, #ff5f6d, #ffc371)");
            setTimeout(() => window.location.reload(), 500);
        });

    } else {
        authNav.innerHTML = `
            <li class="nav-item">
                <a class="nav-link" href="./pages/login.html">Log in</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./pages/register.html">Register</a>
            </li>
        `;
    }
});
