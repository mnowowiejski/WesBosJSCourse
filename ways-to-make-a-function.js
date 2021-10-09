console.log("these nutz");

// Basic Function
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

//Anonymous Function:
// function (firstName) {
//     return `Dr. ${firstName}`;
//   }

//Function inside an Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

//Arrow fuctions (new)

// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return `${inches} inches equals ${cm} CMs`;
// }
// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add2 = (a, b = 3) => a + b;

//returning an object

// function makeABaby(first, last) {
//   const baby = {
//     Name: `${first} ${last}`,
//     Age: 0,
//   };
//   return baby;
// }

//IIFE - Immediately Invoked Function Expression

// (function () {
//   console.log("Running ANONYMOUS SMELLS");
//   return "You smell funny";
// })();

//Methods!
//call as markus.sayHi() in console
const markus = {
  name: "Markus Nowowiejski",
  sayHi: function () {
    console.log("Yo Markus");
    return "Hola Markus";
  },
};

//Callback Functions
//click callback

const button = document.querySelector(".clickme");

console.log(button);

function theseNuts() {
  console.log("Eat me!");
}

button.addEventListener("click", theseNuts);
