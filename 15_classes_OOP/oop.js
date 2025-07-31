const user = {
  username: "Abhi",
  loginCount: 9,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got User Details from DATABASE");
    // console.log(`username:${this.username}`);
    console.log(this);
  },
};

// console.log(user.username)
// console.log(user.getUserDetails())

// const promisone = new Promise()
// const date = new Date()

function User(username, loginCount, isloggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isloggedIn = isloggedIn;


    this.greeting = function(){
        console.log(`welcome${this.username}`);
        
    }
    
  return this;
}


const userOne = new User("Nisha", 12, true);
const userTwo = new User("Abhi",10,false)
console.log(userOne.constructor);
// console.log(userTwo);