const User = {
    _email:'abhi@123.in',
    _password:'123abc',

    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
