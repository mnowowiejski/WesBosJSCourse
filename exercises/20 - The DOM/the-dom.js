console.log("How bout them Ravens!");

// // const imgs = document.querySelectorAll("img");
// // const items2 = document.querySelector(".farts");

// // console.log(imgs);
// // console.log(items2);

// const heading = document.querySelector("h2");
// console.log(heading.textContent);
// // heading.textContent = "Markus is on fire!";
// console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaLight = document.querySelector(".pizza");

// console.log(pizzaLight.textContent);

// pizzaLight.textContent = `${pizzaLight.textContent}   and cheese`;

// pizzaLight.insertAdjacentText("beforeend", " bacon");

//working with classes

const pic = document.querySelector(".nice");
pic.classList.remove(".nice");
pic.classList.add("round");
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", toggleRound);

pic.alt = "Puppy Time";
pic.width = 455;

pic.addEventListener("click", function () {
  alert("what are you doing now?");
});
