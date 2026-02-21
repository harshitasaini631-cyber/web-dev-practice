//get element by id
const heading = document.getElementById("title");
console.log(heading);

//get element by class
const paragraph = document.getElementsByClassName("text");
console.log(paragraph);
//returns a collection and not just a single element

//get elements by tag name
const allParagraph = document.getElementsByTagName("p");
console.log(allParagraph);

//Query selector. returns first matching element.
const element = document.querySelector(".heading");
console.log(element);

//query selector all . returns all matching elements. returns node list
const allHeadings = document.querySelectorAll(".heading");
console.log(allHeadings);