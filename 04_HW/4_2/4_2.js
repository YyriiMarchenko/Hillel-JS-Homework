let arr = [
  16,
  -37,
  54,
  -4,
  72,
  -56,
  47,
  4,
  -16,
  25 - 37,
  46,
  4 - 51,
  27,
  -63,
  4,
  -54,
  76,
  -4,
  12,
  235,
  4,
  47,
  5,
];
console.log(arr);

// 2.1
const arr1 = arr.filter(function (element) {
  return element > 0;
});
console.log(arr1);
console.log(arr1.length);
const sum = arr
  .filter(function (element) {
    return element > 0;
  })
  .reduce(function (prev, element) {
    return prev + element;
  }, 0);
console.log(sum);

// 2.2
console.log(Math.min(...arr));
console.log(arr.indexOf(Math.min(...arr)));

// 2.3
console.log(Math.max(...arr));
console.log(arr.indexOf(Math.max(...arr)));

// 2.4
const arr3 = arr.filter(function (element) {
  return element < 0;
});
console.log(arr3);
console.log(arr3.length);

// 2.5
const arr4 = arr.filter(function (element) {
  return element > 0 && element % 2 !== 0;
});
console.log(arr4);
console.log(arr4.length);

// 2.6
const sum2 = arr
  .filter(function (element) {
    return element > 0 && element % 2 == 0;
  })
  .reduce(function (prev, element) {
    return prev + element;
  }, 0);

console.log(sum2);

// 2.7
const arr5 = arr.filter(function (element) {
  return element > 0;
});
const pro = arr5.reduce(function (prev, element) {
  return prev * element;
}, 1);
console.log(arr5);
console.log(pro);

// 2.8

const arr7 = arr.map(function (element) {
  let nullElenent;
  let maxElenent = Math.max(...arr);
  if (element < Math.max(...arr)) {
    nullElenent = element * 0;
    return nullElenent;
  } else return maxElenent;
});

console.log(arr7);
