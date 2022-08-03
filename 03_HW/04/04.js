const login = prompt("Вкажіть логин");

switch (login) {
  case "admin":
    console.log("Логін вірний. Вкажіть пароль ");
    const password1 = prompt("Вкажіть пароль");
    switch (password1) {
      case "mySuperPassword":
        console.log("Пароль вірний");
        alert("Пароль вірний");
        break;
      default:
        console.log("Пароль невірний ");
        alert("Пароль невірний ");
    }

    break;
  default:
    console.log("Логін невірний ");
    alert("Логін невірний ");
}
