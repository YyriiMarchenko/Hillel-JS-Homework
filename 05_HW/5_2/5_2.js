let arr = [5, 4, 5, 3, 6, 5, 9];

function removeElement(array, item) {
  return array.filter((element) => {
    return element != item;
  });
}

console.log(removeElement(arr, 3));
