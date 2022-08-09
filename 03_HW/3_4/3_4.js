const num = parseInt(prompt());
let prime = true;

if (num == 2 || num == 1) {
  prime = true;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
}
console.log(prime ? `Число ${num} є простим` : `Число ${num} є складеним`);
