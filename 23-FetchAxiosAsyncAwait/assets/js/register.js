const registerForm = document.getElementById("registerForm");

function showToast(msg, color = "linear-gradient(to right, #ff5f6d, #ffc371)") {
    Toastify({
        text: msg,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: color }
    }).showToast();
}

function isStrongPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&]).{8,}$/.test(password);
}

if (registerForm) {
    registerForm.onsubmit = function (e) {
        e.preventDefault();

        const username = regUsername.value;
        const email = regEmail.value;
        const password = regPassword.value;
        const confirmPassword = regConfirmPassword.value;

        const users = JSON.parse(localStorage.getItem("users")) || {};

        if (!/^[a-zA-Z0-9_-]{3,20}$/.test(username)) return showToast("Wrong usernme");
        if (!/\S+@\S+\.\S+/.test(email)) return showToast("Wrong email");
        if (!isStrongPassword(password)) return showToast("not strong pass");
        if (password !== confirmPassword) return showToast("wrong password");

        if (users[username] || Object.values(users).some(u => u.email === email)) {
            return showToast("there's user like that!");
        }

        users[username] = { email, password };
        localStorage.setItem("users", JSON.stringify(users));
        showToast("Succes", "linear-gradient(to right, #00b09b, #96c93d)");
        registerForm.reset();
        setTimeout(() => window.location.href = "../pages/login.html", 1000);
    };
}
