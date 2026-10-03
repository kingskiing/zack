/* =========================================
   SWITCH BETWEEN LOGIN AND REGISTER
========================================= */

function showRegister() {

    document
        .getElementById("loginForm")
        .classList.remove("active");

    document
        .getElementById("registerForm")
        .classList.add("active");
}


function showLogin() {

    document
        .getElementById("registerForm")
        .classList.remove("active");

    document
        .getElementById("loginForm")
        .classList.add("active");
}


/* =========================================
   SHOW / HIDE PASSWORD
========================================= */

function togglePassword(inputId, button) {

    const input =
        document.getElementById(inputId);

    const icon =
        button.querySelector("i");


    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

    }
}


/* =========================================
   LOGIN
========================================= */

document
    .getElementById("login")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;


        if (!email || !password) {

            alert("Please enter your email and password.");

            return;
        }


        /*
         * FRONTEND DEMO ONLY
         *
         * Later this will send the credentials
         * to your Python/Java backend.
         */

        alert("Login form submitted!");

        console.log({
            email: email,
            password: password
        });

    });


/* =========================================
   REGISTER
========================================= */

document
    .getElementById("register")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("fullName").value;

        const email =
            document.getElementById("registerEmail").value;

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        if (password.length < 6) {

            alert(
                "Password must contain at least 6 characters."
            );

            return;
        }


        /*
         * FRONTEND DEMO ONLY
         *
         * Backend registration will be
         * connected later.
         */

        alert(
            "Account created successfully!"
        );

        console.log({

            name: name,

            email: email,

            password: password

        });

    });


/* =========================================
   FORGOT PASSWORD
========================================= */

document
    .getElementById("forgotPassword")
    .addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "Password reset functionality will be added to the backend."
        );

    });