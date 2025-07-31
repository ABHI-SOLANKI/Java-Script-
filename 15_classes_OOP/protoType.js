// let myName = "ABHISHEK       "
// let myLName = "Solanki     "
// console.log(myName.trueLength);

let myHero = ["thor", "wanda"];

let heroPower = {
  thor: "hammer",
  wanda: "Jadu",

  getWandaPower: function () {
    console.log(`Wanda Power Is ${this.wanda}`);
  },
};

Object.prototype.abhi = function () {
  console.log(`Abhi is  present In All Object`);
};

Array.prototype.heyAbhi = function () {
  console.log(`Abhi Hello`);
};

// heroPower.abhi();
// myHero.abhi();
// myHero.heyAbhi();
// heroPower.heyAbhi()

// Inheritance

const user = {
  name: "chai",
  email: "Chai@123",
};

const teacher = {
  makevideo: true,
};
const teachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// Morden Syntax
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUserName = "Chai Aur Code        "
String.prototype.trueLenght=function(){
    console.log(`${this}`);
    console.log(`True Lenght is : ${this.trim().length}`);
    
}
anotherUserName.trueLenght()
"Abhi".trueLenght()
"IceTea".trueLenght()