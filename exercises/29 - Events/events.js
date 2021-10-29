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

function handleBuyButtonClick(event) {
  const button = event.target;
  console.log(button.textContent);
  console.log("You Clicked The Button!");
  console.log(event.target.dataset.price);
  console.log(this);
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

window.addEventListener("click", function () {
  console.log("wtf?");
});
