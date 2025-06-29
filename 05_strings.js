const name = "abhi "
const repoCount = 340

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('abhisolanki')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(8));
console.log(gameName.lastIndexOf('s'));

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const addstring = "   abhi    "
console.log(addstring);
console.log(addstring.trim());

const url = "https://abhi.com/abhi%20solanki"
console.log(url.replace('%20', '-'));

console.log(url.includes('abhi'));

console.log(gameName.split('-'));
