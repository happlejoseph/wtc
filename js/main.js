 // Get all nav links
let navLinks = document.querySelectorAll('.nav-link');

// Function to remove 'active' from all links
function removeActiveClasses() {
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
}

// Function to handle a click on any link
function handleNavClick(event) {

    // Remove 'active' from all links first
    removeActiveClasses();

    // Add 'active' to the clicked one
    event.target.classList.add('active');
}


// Attach the click event handler to each link
navLinks.forEach(function(link) {
    // console.log(link)
    link.addEventListener('click', handleNavClick);
});
