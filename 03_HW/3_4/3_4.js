const num = parseInt(prompt());

function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return console.log("Число не є простим");
    }
  }
  return console.log("Число  є простим");
}
prime(num);
