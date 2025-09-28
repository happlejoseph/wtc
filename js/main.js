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


// Scroll-trigger animation
// const reveals = document.querySelectorAll('.imageReveal');
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     }
//   });
// }, { threshold: 0.2 });

// reveals.forEach(el => observer.observe(el));

const images = document.querySelectorAll('.imageReveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Fully in view → fade in
    if (entry.intersectionRatio > 0.5) { 
      entry.target.classList.add('visible');
    } else { 
      // Less than 50% visible → fade out completely
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: Array.from({length: 101}, (_, i) => i/100) }); 
// Threshold from 0 to 1 to detect any change in visibility

images.forEach(img => observer.observe(img));