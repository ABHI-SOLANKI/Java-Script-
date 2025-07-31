class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toLowerCase()
  }
  set email(value){
    this._email=value
  }

  get password() {
    return `${this._password}hitesh`
  }

  set password(value) {
    this._password = value
  }
}

const hitesh = new User("Hitesh@123.gamil", "asdfg");
console.log(hitesh.email);
console.log(hitesh.password);