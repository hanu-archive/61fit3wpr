"use strict";
(function () {
  const API_URL = "https://hanustartup.org/wpr/api/login.php";

  window.addEventListener("load", init);

  /**
   * Sets up the sign-in button event listener on initial page load
   */
  function init() {
    id("sign-in").addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form from refreshing the page
      signIn();
    });
  }

  /**
   * Signs the user in based on username and password inputs
   */
  function signIn() {
    // Get the input values
    const username = id("username").value;
    const password = id("password").value;

    // Prepare the POST request parameters
    const params = new URLSearchParams();
    params.append("user", username);
    params.append("password", password);

    // Make the POST request to the login API
    fetch(API_URL, {
      method: "POST",
      body: params,
    })
      .then(statusCheck)
      .then((res) => res.text())
      .then(showResponse)
      .catch((error) => {
        showResponse("Error: " + error.message);
      });
  }

  /**
   * Displays the API response in the #response element
   * @param {string} message - The message to display
   */
  function showResponse(message) {
    id("response").textContent = message;
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  function id(id) {
    return document.getElementById(id);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }
})();
