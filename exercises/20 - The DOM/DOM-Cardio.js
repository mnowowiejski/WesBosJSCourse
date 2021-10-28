console.log("it works");

// Make a div
const mydiv = document.createElement("div");
// add a class of wrapper to it
mydiv.classList.add("wrapper");
// put it into the body
document.body.append(mydiv);
// make an unordered list
const ul = `<ul>
<li>First</li>
<li>Second</li>
<li>Third</li>
</ul>`;
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

mydiv.innerHTML = ul;
console.log(mydiv);
// create an image

const img = document.createElement("img");
img.src =
  "https://ravenswire.usatoday.com/wp-content/uploads/sites/55/2016/12/logo_ravenswire.png";

mydiv.appendChild(img);

// set the source to an image
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add("logo");
// add an alt of Cute Puppy
img.alt = "Ravens Wire Logo";
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it

const myHTML = `
<div class="farts">
  <p>Paragraph One</p>
<p>Paragraph Two</p>
</div>`;
// put this div before the unordered list from above

li.insertAdjacentHTML("beforebegin", myHTML);

// add a class to the second
//paragraph called warning

const foo = div.querySelector(".farts");

console.log("foo");

// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
