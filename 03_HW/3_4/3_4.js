const num = parseInt(prompt("Введіть ціле число"));

function prime(num) {
  if (num == 2 || num == 1) {
    return console.log(`Число ${num} є простим`);
  } else
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return console.log(`Число ${num} є складеним`);
      }
    }
  return console.log(`Число ${num} є простим`);
}
prime(num);

// Ще один варіант але не зовсім коректний. Потребує доопрацювання.
// if (num == 2 || num == 1) {
//   console.log(`Число ${num} є простим`);
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       console.log(`Число ${num} є складеним`);
//       break;
//     } else {
//       console.log(`Число ${num} є простим`);
//     }
//   }
// }
