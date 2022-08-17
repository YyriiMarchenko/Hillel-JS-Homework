const staf = [
  {
    index: 0,
    isActive: true,
    name: "John Doe",
    balance: "$2,226.60",
    phone: "+1 (840) 583-3207",
  },
  {
    index: 1,
    isActive: true,
    name: "Merry Hope",
    balance: "$2,778.05",
    phone: "+1 (856) 599-3450",
  },
  {
    index: 2,
    isActive: true,
    name: "Eugene Stakidis",
    balance: "$730.10",
    phone: "+1 (840) 333-5400",
  },
  {
    index: 2,
    isActive: true,
    name: "Stan Smith",
    balance: "$5,001.50",
    phone: "+1 (839) 121-3044",
  },
  {
    index: 3,
    isActive: true,
    name: "Johnatan Tape",
    balance: "$3,020.60",
    phone: "+1 (839) 003-5579",
  },
  {
    index: 4,
    isActive: true,
    name: "Aaron Big",
    balance: "$1,999.99",
    phone: "+1 (840) 033-6873",
  },
  {
    index: 5,
    isActive: true,
    name: "Artur Cheese",
    balance: "$2,545.00",
    phone: "+1 (840) 562-3790",
  },
];
console.log(staf);
// Копіювання масиву об'єктів

const base = staf.map((element) => {
  element = { ...element };
  return element;
});

// Переведення значення балансів в число

const newArr = base.map((element) => {
  element.balance = Number(
    element.balance
      .split("")
      .map((a) => Number(a))
      .filter((b) => b >= 0)
      .map((a) => String(a))
      .join("")
  );
  return element;
});

// Фільтруємо значення балансу та формуємо масив телефонних номерів

let arrPhon = [];

const newBalance = newArr.filter((element) => {
  if (element.balance > 200000) {
    arrPhon.push(element.phone);
    return element.phone;
  }
});

console.log(arrPhon);

// const newBalance = newArr.filter((element) => element.balance > 200000);

// Сума  балансу
const sumBalanse = newArr.reduce((prev, element) => {
  return prev + element.balance;
}, 0);

// Переведення значення суми балансів з числа в рядок

const sumBalanseArr = [...sumBalanse.toString()];
sumBalanseArr.splice(0, 0, "$");
sumBalanseArr.splice(length - 2, 0, ".");
sumBalanseArr.splice(length - 6, 0, ",");
sumBalanseArr.join("");
console.log(`Сума балансів ${sumBalanseArr.join("")}`);
