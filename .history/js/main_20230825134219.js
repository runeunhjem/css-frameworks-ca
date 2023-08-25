document.addEventListener("DOMContentLoaded", function () {
  var rememberCheckbox = document.getElementById("remember");

  rememberCheckbox.addEventListener("change", function () {
    var formCheck = rememberCheckbox.closest(".form-check");
    if (rememberCheckbox.checked) {
      formCheck.classList.add("form-check-success");
    } else {
      formCheck.classList.remove("form-check-success");
    }
  });
});
