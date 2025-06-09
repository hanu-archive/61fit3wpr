/*
 * Capitalizing text of all paragraphs
 */

"use strict";
(function () {

  window.addEventListener("load", init);
  function init() {
    /*
 * Capitalizing text of all paragraphs
 */
    let changed = false;
    const changeBtn = document.getElementById("capitalize");
    changeBtn.addEventListener("click", function () {
      const paragraphs = document.querySelectorAll("p");
    if (changed) {
      for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].innerHTML = paragraphs[i].textContent.toLowerCase(
        )
        changed=false
      }
    } else {
      for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = paragraphs[i].textContent.toUpperCase();
        
      }
      changed = true;
    }})
    
    } 
})();
  /**
   * init - write your logic here
   */
 