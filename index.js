/**
 * McKinnon Williams
 * April 19th, 2020
 * Section AJ: TAs Wilson Tang and Wenxuan Liu
 * This is the Javascript for cyo.html. It is used to add images to the page and to change the
 * mode from light to dark.
 */
"use strict";
(function() {

  window.addEventListener('load', init);

  /**
   * Initializes variables and adds event listeners to elements on the page
   */
  function init() {
    id("close").addEventListener("click", close);
    id("first-button").addEventListener("click", addFirst);
    id("second-button").addEventListener("click", addSecond);
    id("third-button").addEventListener("click", addThird);
    id("night").addEventListener("click", nightmode);
  }

  /**
   * Closes the div that contains the buttons to add images
   */
  function close() {
    id("user-info").style.display = "none";
  }

  /**
   * Changes background of the page to be dark
   * and the text to be light to be easier to see
   */
  function nightmode() {
    let body = qs("body");
    body.style.backgroundColor = "#111";
    body.style.color = "#fff";
    let links = qsa("a");

    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#fff";
    }
  }

  /**
   * Adds the selected image to the first column
   */
  function addFirst() {
    addImg("first");
  }

  /**
   * Adds the selected image to the second column
   */
  function addSecond() {
    addImg("second");
  }

  /**
   * Adds the selected image to the third column
   */
  function addThird() {
    addImg("third");
  }

  /**
   * Checks a given URL to determine if it is an image
   * https://stackoverflow.com/questions/9714525/javascript-image-url-verify
   * From stack overflow, uses a regex to match the end to one of the following endings
   * jpeg, jpg, gif, png.
   *
   * @param {string} url url to check if
   * @returns {boolean} True if the file end is one of the listed file types
   */
  function checkImg(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
  }

  /**
   * Adds the selected image to the given column
   * @param {string} className - name of column
   */
  function addImg(className) {
    let textBox = className + "-text";
    textBox = id(textBox);
    let url = textBox.value;
    textBox.value = "";
    if (checkImg(url)) {
      let image = document.createElement("img");
      let div = document.createElement("div");
      div.setAttribute("width", "90%");
      image.setAttribute("src", url);
      image.setAttribute("width", "95%");
      div.appendChild(image);
      id(className).appendChild(div);
    } /* else {
       * alert("Not a valid image url");
    }  */
  }

  /* --- CSE 154 HELPER FUNCTIONS --- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {NodeListOf<Element>} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
