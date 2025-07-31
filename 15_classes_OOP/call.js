function setUserName(useranme) {
  // Complex DB Call
  this.useranme = useranme
  console.log("called")
  
}
function createUser(username, email, password) {
  setUserName.call(this,username);
  
  this.email = email;
  this.password = password;
}

const chai = new createUser("Chai", "chai@goggle", "123");
console.log(chai);
