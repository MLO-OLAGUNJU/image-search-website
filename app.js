const accessKey = "joCIb8vfNTFR6iA-dlM9roAw-J1T0vnmBAi0V_OWcBo";

const formElement = document.querySelector("form");
const inputElement = document.querySelector("#search-input");
const searchResults = document.querySelector(".search-results");
const showMoreButton = document.querySelector("#show-more-button");
const searchResult = document.querySelectorAll(".search-result");

let inputData = "";
let page = 1;
