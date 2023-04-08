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

