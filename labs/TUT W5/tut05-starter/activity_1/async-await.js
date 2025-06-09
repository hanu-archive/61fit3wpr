"use strict";
(function () {
  window.addEventListener("load", init);

  async function init() {
    try {
      const result1 = await m3();
      const result2 = await m1(result1);
      const result3 = await m2(result2);
      console.log(result3);
    } catch (error) {
      console.error(error);
    }
  }

  function m1(value) {
    return value + " lemon squeezy!";
  }

  function m2(value) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(value + " I'm gettin the hang of it now");
      }, 2000);
    });
  }

  function m3() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("easy peasy");
      }, 1000);
    });
  }
})();
