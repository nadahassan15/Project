
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login_form");
    const signupForm = document.querySelector(".signup_form");
    const loginButton = document.querySelector(".button");
    const loginbtn = document.querySelector(".Login");
    const signupButton = document.querySelector(".Signup");
    const formContainer = document.querySelector(".form_container");
    const formCloser = document.querySelector(".form_closer");

    formContainer.style.display = "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";


    loginButton.addEventListener("click", function() {
       
        formContainer.style.display = "block";
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    signupButton.addEventListener("click", function() {
    
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    });
    
    loginbtn.addEventListener("click", function() {
        
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    formCloser.addEventListener("click", function() {
        formContainer.style.display = "none";
        loginForm.style.display = "none";
        signupForm.style.display = "none";
    });
});
