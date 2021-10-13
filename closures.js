console.log("I'm drowning here");

// function outer() {
//   const outerVar = "Hey I am the outer variable";
//   function inner() {
//     const innerVar = "Hey I am the inner variable";
//     console.log(innerVar);
//     console.log(outerVar);

//     inner();
//   }
// }

// outer();

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting("hello");
const sayYo = createGreeting("Yo");

console.log(sayHello("Markus"));
console.log(sayYo("Markus"));

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  };
}

const hockeyGame = createGame("Hockey");
const baseBall = createGame("Baseball");
