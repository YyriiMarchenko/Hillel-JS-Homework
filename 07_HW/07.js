function User() {
  this.name = prompt("Select name");
  while (this.name == "") {
    alert("You don`t select name");
    this.name = prompt("Select name");
  }
  this.age = +prompt("Select age");
  while (this.age < 18) {
    alert("You have to select age more 18 year ");
    this.age = prompt("Select age");
  }
}

function Car() {
  this.model = prompt("Select model");
  while (this.model == "") {
    alert("You don`t select model");
    this.model = prompt("Select model");
  }

  this.year = +prompt("Select year");
  while (isFinite(this.year) == false) {
    alert("You don`t select year");
    this.year = prompt("Select year");
  }

  this.color = prompt("Select color");
  while (this.color == "") {
    alert("You don`t select color");
    this.color = prompt("Select color");
  }

  this.owner = new User();
  this.show = function () {
    console.log(
      `Car: model ${this.model}, year ${this.year}, color ${this.color} 
    Owner: ${this.owner.name}, age ${this.owner.age} year `
    );
  };
}

let carOrigin = new Car();
carOrigin.show();
console.log(carOrigin);
