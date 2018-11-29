//  NAVBAR ANIMATE ICON

// Works everywhere
$(document).ready(function() {
  // Hide/show animation hamburger function
  $(".navbar-toggler").on("click", function() {
    // Take this line to second hamburger animation
    $(".animated-icon3").toggleClass("open");
  });
});

// WOW.JS
new WOW().init();

// CURRENT YEAR
$("#currentYear").text(new Date().getFullYear());

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
