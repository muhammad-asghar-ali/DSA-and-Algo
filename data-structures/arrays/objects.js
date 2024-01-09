/////////////////////////////////////////// Reference Type

const obj1 = { value: 10 };
const obj2 = obj1;
const obj3 = { value: 10 };

console.log(obj1 === obj2); // true
console.log(obj1 === obj3); // false

obj1.value = 15;
console.log(obj1.value); // 15
console.log(obj2.value); // 15
console.log(obj3.value); // 10

console.log([] === []); // false

/////////////////////////////////////////// Context vs Scope
function b() {
  const a = 1;
}
// console.log(a); // scope

const obj4 = {
  a: function () {
    console.log(this);
  },
};
console.log(obj4.a()); // { a: [Function: a] }

/////////////////////////////////////////// Instantiation
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }

  intro() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`I am ${this.type}`);
  }
}

const w1 = new Wizard('shelly', 'Healer');
const w2 = new Wizard('john', 'Dark Magic');

/////////////////////////////////////////// Classical Inheritence
var Player = function (name, type) {
  this.name = name;
  this.type = tpye;
};

Player.prototype.intro = function () {
  console.log(`Hi I am ${this.name}, I am a ${this.type}`);
};
const w3 = new Player('shelly', 'Healer');
const w4 = new Player('john', 'Dark Magic');

w3.play = function () {
  console.log(`I am ${this.type}`);
};

w4.play = function () {
  console.log(`I am ${this.type}`);
};
