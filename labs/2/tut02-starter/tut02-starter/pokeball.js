/*
 * Pokeball Exercise
 *
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked.
 */
"use strict";
(function () {
  window.addEventListener("load", init);
  /**
   * init - setup the demo button to change the image on click.
   */

  function init() {
    const button = document.getElementById("demo-btn");
    const image = document.getElementById("pokeball");
    let changed = false; // Initialize to false

    button.addEventListener("click", () => {
      if (changed) {
        image.src = "pokeball.jpg";
        changed = false;
      } else {
        image.src = "mystery.gif";
        changed = true;
      }
    });
  }
})();
