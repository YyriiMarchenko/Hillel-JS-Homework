let str1 = "hello world";

function filterStr(str, arr) {
  return str
    .split("")
    .filter((item) => item !== arr)
    .join("");
}
console.log(filterStr(str1, "l"));

//  console.log(filterStr(str1, ["l", "w"]));

// Функція не допрацьована. Працює тільки з одним аргументом.
