const allNumber = parseInt(prompt("Вкажіть трьохзначне число"));

const number1 = allNumber % 10;
const number2 = ((allNumber - number1) / 10) % 10;
const number3 = (((allNumber - number1) / 10 - number2) / 10) % 10;

console.log(allNumber);

if (number1 == number2 && number2 == number3) {
  console.log(`Всі три цифри однакові`);
} else if (number1 == number2 || number2 == number3 || number1 == number3) {
  console.log(`Дві з трьох цифр однакові`);
}
