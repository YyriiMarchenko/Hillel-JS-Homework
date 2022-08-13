let arr = [];
console.log(arr);
let num;

while (true) {
  const num = prompt();
  if (num == null) {
    break;
  }
  arr.push(num);
  console.log(`Додано ще один елемент масиву [${arr}]`);
}

console.log(
  `Відсоротований масив  [${arr.sort(function (a, b) {
    return a - b;
  })}]`
);
arr
  .sort(function (a, b) {
    return a - b;
  })
  .splice(1, 3);
console.log(`Масив без елементів з 2 по 4  [${arr}]`);
