// Listen for scroll events
window.onscroll = function() {
    toggleSubNav();
  };
  
  function toggleSubNav() {
    const subNav = document.querySelector('.sub-nav'); // Get the sub-nav element
  
    // Check if we are at the top of the page (scroll position = 0)
    if (document.body.scrollTop <= 0 || document.documentElement.scrollTop <= 0) {
      subNav.style.display = "flex"; // Show the sub-nav if at the top of the page
    } else {
      subNav.style.display = "none"; // Hide the sub-nav if the user scrolls down
    }
  }
