document.addEventListener("DOMContentLoaded", function () {
    // Get all sections
    const sections = document.querySelectorAll("section");

    // Function to handle scroll
    function handleScroll() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    }

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Initial scroll check
    handleScroll();
  });