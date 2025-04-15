const loginForm = document.getElementById("loginForm");

function showToast(msg, color = "linear-gradient(to right, #ff5f6d, #ffc371)") {
    Toastify({
        text: msg,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: color }
    }).showToast();
}

if (loginForm) {
    loginForm.onsubmit = function (e) {
        e.preventDefault();

        const identifier = loginUsernameOrEmail.value.trim();
        const password = loginPassword.value;

        const users = JSON.parse(localStorage.getItem("users")) || {};
        const failedAttempts = JSON.parse(localStorage.getItem("failedAttempts")) || {};

        const userEntry = Object.entries(users).find(([username, user]) =>
            username === identifier || user.email === identifier
        );

        if (!userEntry) return showToast("NO user like that!");

        const [username, user] = userEntry;

        if (failedAttempts[username] && failedAttempts[username].lockedUntil > Date.now()) {
            return showToast("!5 minutes blocked");
        }

        if (user.password === password) {
            localStorage.setItem("currentUser", username);
            failedAttempts[username] = null;
            localStorage.setItem("failedAttempts", JSON.stringify(failedAttempts));
            showToast("Succes", "linear-gradient(to right, #00b09b, #96c93d)");
            loginForm.reset();
            setTimeout(() => window.location.href = "../index.html ", 1000);
        } else {
            if (!failedAttempts[username]) {
                failedAttempts[username] = { count: 1, lockedUntil: null };
            } else {
                failedAttempts[username].count++;
            }

            if (failedAttempts[username].count >= 5) {
                failedAttempts[username].lockedUntil = Date.now() + 15 * 60 * 1000;
                showToast("U've blocked for 15 minutes");
            } else {
                showToast("Wwong pass");
            }

            localStorage.setItem("failedAttempts", JSON.stringify(failedAttempts));
        }
    };
}



