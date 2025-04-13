const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const logoutSection = document.getElementById("logoutSection");

let users = JSON.parse(localStorage.getItem("users")) || {};
let failedAttempts = {};

const showToast = (msg, color = "linear-gradient(to right, #ff5f6d, #ffc371)") => {
    Toastify({ text: msg, duration: 3000, gravity: "top", position: "right", style: { background: color } }).showToast();
};

const isStrongPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&]).{8,}$/.test(password);
};

registerForm.onsubmit = (e) => {
    e.preventDefault();

    const username = regUsername.value.trim();
    const email = regEmail.value.trim();
    const password = regPassword.value;
    const confirmPassword = regConfirmPassword.value;

    if (!/^[a-zA-Z0-9_-]{3,20}$/.test(username)) return showToast("İstifadəçi adı düzgün deyil");
    if (!/\S+@\S+\.\S+/.test(email)) return showToast("Email düzgün deyil");
    if (!isStrongPassword(password)) return showToast("Şifrə güclü deyil");
    if (password !== confirmPassword) return showToast("Şifrələr uyğun deyil");

    if (users[username] || Object.values(users).some(u => u.email === email)) {
        return showToast("Bu istifadəçi artıq mövcuddur");
    }

    users[username] = { email, password };
    localStorage.setItem("users", JSON.stringify(users));
    showToast("Qeydiyyat uğurla tamamlandı", "linear-gradient(to right, #00b09b, #96c93d)");
    registerForm.reset();
};

loginForm.onsubmit = (e) => {
    e.preventDefault();

    const identifier = loginUsernameOrEmail.value.trim();
    const password = loginPassword.value;

    const userEntry = Object.entries(users).find(([username, user]) =>
        username === identifier || user.email === identifier
    );

    if (!userEntry) return showToast("İstifadəçi tapılmadı");

    const [username, user] = userEntry;

    // Lock kontrolü
    if (failedAttempts[username] && failedAttempts[username].lockedUntil > Date.now()) {
        return showToast("Hesab 15 dəqiqəlik bloklanıb");
    }

    if (user.password === password) {
        localStorage.setItem("currentUser", username);
        failedAttempts[username] = null;
        showWelcome(username);
        loginForm.reset();
        showToast("Giriş uğurludur", "linear-gradient(to right, #00b09b, #96c93d)");
    } else {
        if (!failedAttempts[username]) {
            failedAttempts[username] = { count: 1, lockedUntil: null };
        } else {
            failedAttempts[username].count++;
        }

        if (failedAttempts[username].count >= 5) {
            failedAttempts[username].lockedUntil = Date.now() + 15 * 60 * 1000;
            showToast("5 uğursuz cəhd. Hesab 15 dəqiqə bloklanıb");
        } else {
            showToast("Şifrə yanlışdır");
        }
    }
};

logoutBtn.onclick = () => {
    localStorage.removeItem("currentUser");
    logoutSection.style.display = "none";
    showToast("Çıxış etdiniz", "linear-gradient(to right, #ff5f6d, #ffc371)");
};

function showWelcome(username) {
    welcomeMessage.textContent = `Xoş gəldiniz, ${username}`;
    logoutSection.style.display = "block";
}

// Əgər giriş aktivdirsə
const currentUser = localStorage.getItem("currentUser");
if (currentUser) {
    showWelcome(currentUser);
}
