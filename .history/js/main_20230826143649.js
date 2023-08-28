// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();

// document.addEventListener("DOMContentLoaded", function () {
//   var rememberCheckbox = document.getElementById("remember");

//   rememberCheckbox.addEventListener("change", function () {
//     var formCheck = rememberCheckbox.closest(".form-check");
//     if (rememberCheckbox.checked) {
//       formCheck.classList.add("form-check-success");
//     } else {
//       formCheck.classList.remove("form-check-success");
//     }
//   });
// });
