let str1 = "hello world";
let arr1 = ["h", "l"];

function filterStr(str, arr) {
  return str
    .split("")
    .filter((item) => !arr.includes(item))
    .join("");
}

console.log(filterStr(str1, arr1));
