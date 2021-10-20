console.log("great scott!");

const myParagraph = document.createElement("p");

myParagraph.textContent = "Billick was a better coach";
myParagraph.classList.add("special");
console.log(myParagraph);

const myImage = document.createElement("img");
myImage.alt = "a nice image";
myImage.src = "https://source.unsplash.com/random/300x300";

console.log(myImage);
const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

document.body.appendChild(myParagraph);
document.body.appendChild(myDiv);
myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);

//oh shit ! we need to add a heading
const heading = document.createElement("h2");
heading.textContent = "Billick vs Harbaugh!";
console.log(heading);

myDiv.insertAdjacentElement("afterbegin", heading);

//// <ul>

const mylist = document.createElement("ul");
const li = document.createElement("li");
li.textContent = "three";
mylist.appendChild(li);

document.body.insertAdjacentElement("afterbegin", mylist);
