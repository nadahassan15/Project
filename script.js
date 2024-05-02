document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.querySelector(".signup_form");
    const startNowButton = document.getElementById("startNowButton");
    const loginButton = document.querySelector(".Login");
    const signupButton = document.querySelector(".Signup");
    const formContainer = document.querySelector(".form_container");
    const formCloser = document.querySelector(".form_closer");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword"); // Correct ID for password
    const loginError = document.getElementById("loginError");
    const quizForm = document.getElementById("quizForm");
    
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

    // Login form submission handling
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form from submitting normally

        // Check both email and password
        if (loginEmail.value === "janakhairy@gmail.com" && loginPassword.value === "123") {
            // Correct email and password, proceed to show a new form or redirect
            alert("Login successful. Loading form...");
            // Example redirect or show new form
            
            window.location.href = 'quiz.html';
            
        } else {
            // Wrong email or password
            loginError.style.display = 'block'; // Show the error message
            loginError.textContent = "Wrong email or password!";
        }
    });
});
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const signupError = document.getElementById("signupError");

    // Check if passwords match
    if (signupPassword.value === confirmPassword.value) {
        // Store email and password in local storage
        localStorage.setItem('userEmail', signupEmail.value);
        localStorage.setItem('userPassword', btoa(signupPassword.value));  // Encode password with Base64 (for simplicity)

        alert("Signup successful. Your details have been saved.");
        // Optionally clear form or redirect
        window.location.href = 'quiz.html'; // Redirect to a new page
    } else {
        // Display error message if passwords do not match
        signupError.style.display = 'block';
        signupError.textContent = "Passwords do not match!";
    }
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the user's answers from the form
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const activity = document.getElementById("activity").value;
        const goal = document.getElementById("goal").value;
    
        // Process the user's answers (you can replace this with your logic)
        const result = {
            age: age,
            gender: gender,
            activity: activity,
            goal: goal
        };
    
        // Display the result (you can customize this)
        
       // alert("Quiz submitted! Here are your answers: \n" + JSON.stringify(result));

        window.location.href = 'index.html';
    });
});

/*water*/
const addbutton=document.querySelector('.add');
const removebutton=document.querySelector('.remove');
const currentcups=document.querySelector('.current-cups');
const currentliters=document.querySelector('.current-liters');
const currentpercentage=document.querySelector('.current-percentage');
const progresarea = document.querySelector('.progress');


const MAX_CUPS =10;
const MIN_CUPS=0;
let cups=0,
liters=0,
percentage=0;
addbutton.addEventListener("click",addCup);
removebutton.addEventListener("click", removeCup);
function addCup() {
    if (cups < MAX_CUPS) {
        cups++;
        liters += 250;

        percentage = (cups / MAX_CUPS) * 100;
        currentcups.textContent = `${cups}/10`;
        currentliters.textContent = `${liters / 1000}l/2.5l`;
        currentpercentage.textContent = `${percentage}%`;
        progresarea.style.height = `${percentage}%`;

        if (cups === MAX_CUPS) {
            addbutton.disabled = true;
        }

       else {
            removebutton.disabled = false;
        }
    }
}

function removeCup() {
    if (cups > MIN_CUPS) {
        cups--;
        liters -= 250;
        percentage = (cups / MAX_CUPS) * 100;
        currentcups.textContent = `${cups}/10`;
        currentliters.textContent = `${liters / 1000}l/2.5l`;
        currentpercentage.textContent = `${percentage}%`;
        progresarea.style.height = `${percentage}%`;

        if (cups === MIN_CUPS) {
            removebutton.disabled = true;
        }

        else {
            addbutton.disabled = false;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const weightScaleButton = document.getElementById('weightScaleButton');

    weightScaleButton.addEventListener('click', function() {
        window.location.href = 'check-in.html'; 
    });
    const checkInLink = document.querySelector('.bottom_nav li:nth-child(3) a'); 
    checkInLink.addEventListener('click', function(event) {
        event.preventDefault();
        
       
        window.location.href = 'check-in.html';
    });
});
