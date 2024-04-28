document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login_form");
    const signupForm = document.querySelector(".signup_form");
    const startNowButton = document.getElementById("startNowButton");
    const loginButton = document.querySelector(".Login");
    const signupButton = document.querySelector(".Signup");
    const formContainer = document.querySelector(".form_container");
    const formCloser = document.querySelector(".form_closer");

    // Initially hide the form container and both forms
    formContainer.style.display = "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";

    // Event listener for the Start Now button
    startNowButton.addEventListener("click", function(event) {
        event.preventDefault();
        formContainer.style.display = "block";
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    // Event listener for the Sign up link in the login form
    signupButton.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    // Event listener for the Login link in the signup form
    loginButton.addEventListener("click", function(event) {
        event.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Event listener for the close button in the form container
    formCloser.addEventListener("click", function() {
        formContainer.style.display = "none";
        loginForm.style.display = "none";
        signupForm.style.display = "none";
    });
});

