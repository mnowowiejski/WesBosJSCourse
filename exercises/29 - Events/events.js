console.log("Do or do not there is no try");

const butts = document.querySelector(".butts");
const beavis = document.querySelector(".beavis");
console.log(butts);
console.log(beavis);
function handleClick() {
  console.log("You got clicked");
}

const hooray = () => console.log("HOORAY!");

butts.addEventListener("click", hooray);
beavis.addEventListener("click", handleClick);

// butts.removeEventListener("click", handleClick);

//listen on multiple items

const buyButtons = document.querySelectorAll("button.buy");

function buyButtons.forEach(function (buybutton) {
  console.log(buyButton);
});
