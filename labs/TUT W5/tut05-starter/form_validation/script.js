"use strict";
(function () {
  window.addEventListener("load", init);

  /**
   * Initializes the form by adding event listeners to the form and its input fields
   */
  function init() {
    const form = id("registrationForm");
    form.addEventListener("submit", validateForm);

    // Real-time validation for all fields
    id("name").addEventListener("input", validateName);
    id("email").addEventListener("input", validateEmail);
    id("password").addEventListener("input", validatePassword);
    id("confirmPassword").addEventListener("input", validateConfirmPassword);
  }

  /**
   * Validates the entire form on submit
   * @param {Event} event - the event that triggered this function
   */
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission if there are validation errors

    let isValid =
      validateName() &
      validateEmail() &
      validatePassword() &
      validateConfirmPassword();
    if (isValid) {
      startCountdown();
    }
  }

  /**
   * Starts a 3-second countdown and displays a success message
   */
  function startCountdown() {
    let countdownDiv = id("countdown");
    countdownDiv.style.display = "block";
    let timeLeft = 3;
    countdownDiv.textContent = `Form submitted successfully! Redirecting in ${timeLeft} seconds...`;

    let countdownInterval = setInterval(() => {
      timeLeft--;
      countdownDiv.textContent = `Form submitted successfully! Redirecting in ${timeLeft} seconds...`;

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownDiv.textContent = "Success!";
      }
    }, 1000);
  }

  /**
   * Validates the name field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateName() {
    const name = id("name").value.trim();
    const error = id("nameError");

    if (name.length >= 3) {
      error.textContent = "";
      return true;
    } else {
      error.textContent = "Name must be at least 3 characters long.";
      return false;
    }
  }

  /**
   * Validates the email field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateEmail() {
    const email = id("email").value.trim();
    const error = id("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      error.textContent = "";
      return true;
    } else {
      error.textContent = "Please enter a valid email address.";
      return false;
    }
  }

  /**
   * Validates the password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validatePassword() {
    const password = id("password").value.trim();
    const error = id("passwordError");
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (passwordPattern.test(password)) {
      error.textContent = "";
      return true;
    } else {
      error.textContent =
        "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one number.";
      return false;
    }
  }

  /**
   * Validates the confirm password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateConfirmPassword() {
    const password = id("password").value.trim();
    const confirmPassword = id("confirmPassword").value.trim();
    const error = id("confirmPasswordError");

    if (confirmPassword === password && confirmPassword.length > 0) {
      error.textContent = "";
      return true;
    } else {
      error.textContent = "Passwords do not match.";
      return false;
    }
  }

  /* ------------------------------ Helper Functions ------------------------------ */

  function id(id) {
    return document.getElementById(id);
  }
})();
