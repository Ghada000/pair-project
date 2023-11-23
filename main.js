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

//     // Listen for scroll events
//     window.addEventListener("scroll", handleScroll);

//     // Initial scroll check
//     handleScroll();
//   });
//   // Initialize the map
//   function initMap() {
//     // Specify the location
//     var myLatLng = { lat: -34.397, lng: 150.644 };

//     // Create a new map instance
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: myLatLng,
//         zoom: 8
//     });

//     // Create a marker on the map
//     var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         title: 'Hello World!'
//     });
// }