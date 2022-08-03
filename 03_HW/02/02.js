const allNumber = parseInt(prompt("Вкажіть шестизначний номер вашого квитка"));

const number1 = allNumber % 10;
const number2 = ((allNumber - number1) / 10) % 10;
const number3 = (((allNumber - number1) / 10 - number2) / 10) % 10;
const number4 =
  ((((allNumber - number1) / 10 - number2) / 10 - number3) / 10) % 10;
const number5 =
  (((((allNumber - number1) / 10 - number2) / 10 - number3) / 10 - number4) /
    10) %
  10;
const number6 =
  ((((((allNumber - number1) / 10 - number2) / 10 - number3) / 10 - number4) /
    10 -
    number5) /
    10) %
  10;
console.log(allNumber);

if (number1 == number6 && number2 == number5 && number3 == number4) {
  console.log(`Вітаю, у Вас щасливий квиток`);
} else {
  console.log(
    `Цифри не співпали. Не засмучуйтесь, Вам пощастить наступного разу`
  );
}
123;
