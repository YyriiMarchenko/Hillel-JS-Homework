// Завдання 1

function inPower(a) {
  return (b) => a * b;
}
console.log(inPower(2)(6));

// Завдання 2

let arr1 = [1, 5, 2, 2, 9, 9, 9, 9];
function inMidle(arr) {
  return (
    arr.reduce((prev, item) => {
      return prev + item;
    }, 0) / arr.length
  );
}

console.log(inMidle(arr1));

// Завдання 4

function getCounter() {
  let counter = 0;
  let counter2 = 0;
  return function (a) {
    let add = a;
    counter++;
    counter2++;
    return (counter += a) - counter2;
  };
}
let count = getCounter();
console.log(count(3));
console.log(count(5));
console.log(count(20));
