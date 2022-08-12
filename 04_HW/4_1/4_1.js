let arr = [];
console.log(arr);
let num;

while (true) {
  const num = prompt("Вкажіть число");
  arr.push(num);
  console.log(`Додано ще один елемент масиву [${arr}]`);
  if (num == null) {
    break;
  }
}
arr.pop();
console.log(`Корегування масиву(видалення null) [${arr}]`);
console.log(`Відсоротований масив  [${arr.sort((a, b) => a - b)}]`);
arr.sort((a, b) => a - b).splice(1, 3);
console.log(`Масив без елементів з 2 по 4  [${arr}]`);
