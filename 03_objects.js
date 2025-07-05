// singleton
// Object.create

// objects literals

const mysym = Symbol("key1")


const Jsuser = {
    name: "abhi",
    "full_name": "ABHI SOLANKI",
    [mysym]: "key1",
    age: 20,
    location: "Surat",
    email: "abhi@123gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monaday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser.full_name);
// console.log(typeof Jsuser[mysym]);

Jsuser.email = "abhi@ghatgtp.com"
// Object.freeze(Jsuser)
Jsuser.email = "abhi@5e365"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Heloo JS USer");   
}
Jsuser.greetingtwo = function(){
    console.log(`Heloo JS USer, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());