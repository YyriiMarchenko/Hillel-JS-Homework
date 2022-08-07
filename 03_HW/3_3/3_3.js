const numberN = parseInt(prompt("Ведіть число"));

if (isFinite(numberN) == true) {
  for (let i = 0; i ** 2 < numberN && i <= 100; i++) {
    console.log(i ** 2);
  }
} else {
  console.log("Введені данні не є числом");
}
