function powerR(a, n) {
  if (n == 1) {
    return a;
  } else {
    return a * powerR(a, n - 1);
  }
}

function doFunction(d, c, power) {
  let a = d;
  let n = c;
  return power;
}

console.log(powerR(2, 3, powerR));
