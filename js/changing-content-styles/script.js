
//inner html
const title =  document.getElementById("heading");
console.log(title.innerHTML);
title.innerText = "Welcome world";


//textContent
const para = document.getElementById("demo");

console.log(para.innerText);
console.log(para.textContent);


// innerHTML

const box = document.getElementById("box");
box.innerHTML = "<h2>This is new heading</h2>";


//style content

const p = document.getElementById("para");

p.style.color = "red";
p.style.fontSize = "30px";
p.style.backgroundColor = "yellow";