const number1 = parseInt(prompt("Вкажіть перше число"));
const number2 = parseInt(prompt("Вкажіть друге число"));
const number3 = parseInt(prompt("Вкажіть третє число"));

if (number1 > number2 && number1 > number3) {
  console.log(`Найбільше число з трьох вказаних ${number1}`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`Найбільше число з трьох вказаних ${number2}`);
} else {
  console.log(`Найбільше число з трьох вказаних ${number3}`);
}
