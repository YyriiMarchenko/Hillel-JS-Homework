const characters = "abcdefghklmop12345678";
const key = randomString(17, characters);

function randomString(length, characters) {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    let randomPoz = Math.floor(Math.random() * characters.length);
    randomString += characters.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

console.log(key);
