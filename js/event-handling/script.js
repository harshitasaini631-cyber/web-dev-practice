//add evnt listener
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  console.log("Button clicked!");
});

//using arrow fn
/*btn.addEventListener("click", () => {
  console.log("Clicked!");
}); */


//mouseover event
const heading = document.getElementById("heading");

heading.addEventListener("mouseover", () => {
  heading.style.color = "red";
});


//keydown and keyup
const input = document.getElementById("input");

input.addEventListener("keydown", () => {
  console.log("Key pressed");
});

input.addEventListener("keyup", () => {
  console.log("Key released");
});


//submit event
const form = document.getElementById("form");

form.addEventListener("submit", () => {
  console.log("Form submitted");
});


//remove event listener
function sayHello() {
  console.log("Hello");
}

btn.addEventListener("click", sayHello);
btn.removeEventListener("click", sayHello);