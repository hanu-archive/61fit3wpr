/*
 * Quadratic equation solver exercise
 *
 * Implements the functionality for index.html webpage to solve quadratic equations
 * Use-case scenario: when a user enters numbers on three text fields with ids of "a",
 * "b", "c" and clicks "Solve" button, equation solution will be displayed on the <div>
 * with id "result".
 *
 */
"use strict";
(function () {
  window.addEventListener("load", init);
  /**
   * init - write your logic here
   */

  function init() {
    const aInput = document.getElementById("a");
    const bInput = document.getElementById("b");
    const cInput = document.getElementById("c");
    const solveButton = document.getElementById("solve");
    const resultDiv = document.getElementById("result");

    solveButton.addEventListener("click", () => {
      const a = parseFloat(aInput.value);
      const b = parseFloat(bInput.value);
      const c = parseFloat(cInput.value);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.textContent = "Please enter valid numbers for a, b, and c.";
      } else {
        const discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
          const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
          const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
          resultDiv.textContent = `The equation has two real roots: ${root1} and ${root2}`;
        } else if (discriminant === 0) {
          const root = -b / (2 * a);
          resultDiv.textContent = `The equation has one real root: ${root}`;
        } else {
          resultDiv.textContent = "The equation has no real roots.";
        }
      }
    });
  }
})();
