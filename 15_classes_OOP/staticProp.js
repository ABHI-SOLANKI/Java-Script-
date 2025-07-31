class User {
    constructor(username) {
        this.username=username
    }
    logMe(){
        console.log(`UserName: ${this.username}`);
        
    }

    static createId(){
        return '123'
    }

}

const abhi = new User("abhi")
// console.log(abhi.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }

}

const iphone = new Teacher("IPhone","I@phone.com")
iphone.logMe();
