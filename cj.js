console.log("These nuts");

function calulateBill(bill = 100, taxRate = 0.06, tipRate = 0.2) {
  //this is the function body
  console.log("Running Calculate Bill");

  const total = bill * (1 + taxRate) + bill * tipRate;
  console.log(total);
  return total;
}

//funciton call or **run**
const myTotal = calulateBill();
console.log(`Your Total is $${myTotal}`);

let firstName = "Mark";

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo();
console.log(greeting);

function doctorize(Firstname) {
  return `Dr. ${Firstname}`;
}

function yell(Firstname) {
  return `HEY ${Firstname.toUpperCase()}`;
}
