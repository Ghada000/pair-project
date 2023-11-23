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

  // Call handleScroll when the page is loaded
  handleScroll();

  // Call handleScroll when the page is scrolled
  window.addEventListener("scroll", handleScroll);
});

// jQuery code
$(document).ready(function () {
  $("#btn1").click(function () {
      window.location.href = 'https://www.en-vols.com/en/getaways/travel/istanbul-historic-mosques/';
  });

  // Optional: Log a message to the console when the button is clicked
  $("#btn1").on("click", function () {
      console.log("Button clicked. Redirecting...");
  });
});



$(document).ready(function () {
  $("#btn2").click(function () {
      window.location.href = 'https://www.afar.com/travel-tips/the-best-bazaars-in-istanbul';
  });

  // Optional: Log a message to the console when the button is clicked
  $("#btn2").on("click", function () {
      console.log("Button clicked. Redirecting...");
  });
});

$(document).ready(function () {
  $("#btn3").click(function () {
      window.location.href = 'https://timesofindia.indiatimes.com/travel/eating-out/dishes-that-you-have-got-to-try-in-istanbul/articleshow/51821997.cms';
  });

  // Optional: Log a message to the console when the button is clicked
  $("#btn3").on("click", function () {
      console.log("Button clicked. Redirecting...");
  });
});