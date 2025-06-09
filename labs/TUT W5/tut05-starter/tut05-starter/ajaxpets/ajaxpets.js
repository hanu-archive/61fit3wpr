"use strict";
(function () {
  window.addEventListener("load", init);

  function init() {
    // Add event listener to both radio buttons
    let animalRadios = qsa("input[name='animal']");
    animalRadios.forEach((radio) => {
      radio.addEventListener("change", makeRequest);
    });
  }

  function makeRequest() {
    // Get the selected animal (kitty or puppy)
    let animal = qs("input[name='animal']:checked").value;

    // Make an AJAX request to the API
    fetch(`https://hanustartup.org/wpr/api/pets/index.php?animal=${animal}`)
      .then(statusCheck)
      .then((res) => res.text())
      .then(displayPictures)
      .catch(console.error); // Handle any errors
  }

  function displayPictures(data) {
    // Clear the #pictures div
    let picturesDiv = id("pictures");
    picturesDiv.innerHTML = "";

    // Split the API response to get the image URLs
    let imageUrls = data.trim().split("\n");

    // Create and append an img element for each URL
    imageUrls.forEach((url) => {
      let img = document.createElement("img");
      img.src = url;
      picturesDiv.appendChild(img);
    });
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

  function qs(query) {
    return document.querySelector(query);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
