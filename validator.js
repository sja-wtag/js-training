document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from submitting normally
      let isValid = true;
  
      // Clear previous validation states
      const allFields = form.querySelectorAll(".form-control, .form-check-input");
      allFields.forEach(field => {
        field.classList.remove("is-valid", "is-invalid");
      });
  
      // Validate Full Name
      const fullName = document.getElementById("fullName");
      if (fullName.value.trim().length < 3) {
        markInvalid(fullName);
        isValid = false;
      } else {
        markValid(fullName);
      }
  
      // Validate Email
      const email = document.getElementById("email");
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
      if (!emailPattern.test(email.value.trim())) {
        markInvalid(email);
        isValid = false;
      } else {
        markValid(email);
      }
  
      // Validate Password
      const password = document.getElementById("password");
      const passwordPattern = /^(?=.*[0-9]).{6,}$/;
      if (!passwordPattern.test(password.value)) {
        markInvalid(password);
        isValid = false;
      } else {
        markValid(password);
      }
  
      // Validate Confirm Password
      const confirmPassword = document.getElementById("confirmPassword");
      if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        markInvalid(confirmPassword);
        isValid = false;
      } else {
        markValid(confirmPassword);
      }
  
      // Validate Phone Number
      const phone = document.getElementById("phone");
      const phonePattern = /^\d{10}$/;
      if (!phonePattern.test(phone.value)) {
        markInvalid(phone);
        isValid = false;
      } else {
        markValid(phone);
      }
  
      // Validate Terms Checkbox
      const terms = document.getElementById("terms");
      if (!terms.checked) {
        markInvalid(terms);
        isValid = false;
      } else {
        markValid(terms);
      }
  
      // Final Result
      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
        allFields.forEach(field => field.classList.remove("is-valid", "is-invalid"));
      }
    });
  
    function markInvalid(input) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
    }
  
    function markValid(input) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }
  });
  