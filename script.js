//PSUEDO CODE for Hamburger

//Things to keep in mind when you work on this project
    // make sure both index.html and contact.html have the script loaded/connected.
    // start with what you know and look at notes accordingly.

// First, we need to go get the hamburger icon from the page (using .querySelector).
    const hamburger = document.querySelector(".hamburger");

// Get a second item from the page being the UL of the nav to manipulate with JS.
    const navMenu = document.querySelector(".navMenu");

// Then, we attach an event listener to that icon that listens for the click event.
    hamburger.addEventListener("click", e);

// When the user clicks on the hamburger icon:
    // Make sure that the hamburger icon is always on top (z index in css)
    // toggle the ul to pop out and in on command/click
    // toggle the hamburger icon to match the ul state
    // create a function that handles the active state for both constants (hamburger icon and ul)
    // Find out what the user clicked on our navigation and go to the loaded page.
    function e() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

// ----------------------------------------------------------------------------------------------------------------------------

//PSEUDO CODE for form (error handling)
// First, we need to go get the form from the page (using .querySelector).
    const contactForm = document.querySelector("form");

// When the user submits the form:
    // Then, we attach an event listener to that form that listens for the submit event.
    // Prevent the default browser behavior on a submit event (which would cause the page to refresh, resetting our app).
    contactForm.addEventListener("submit", e => {
        e.preventDefault();

// Keep this value as form DEFAULT to be able to reset it after event. 
    const fullName = document.querySelector("#fullName");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

// Find out what the user inputed on our form.
    const userName =document.querySelector("#fullName").value.toLowerCase();
    const userEmail = document.querySelector("#email").value.toLowerCase();
    const userMessage = document.querySelector("#message").value.toLowerCase();

// save the input as an array(profile) for backend access in the future.
    const userProfile =  [`name = ${userName}, email = ${userEmail}, message = ${userMessage}`];

    
// tell the user "we received your message, we will contact you shortly!".
// add a paragraph element inside the form that will appear when form is submitted.
    if (contactForm) {
        const confirmation = document.querySelector(".confirmation");
        confirmation.innerHTML = `We received your message, we will contact you shortly!`
    } 
// reset form value back to default.
    fullName.value = "";
    email.value = "";
    message.value = "";

//checking if userProfile works correctly / saved as an array for future use.
    // console.log(userProfile);
});



