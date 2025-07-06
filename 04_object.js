// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "abhi123" 
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "abhi",
            lastname: "solanki"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3:"c" , 4: "d"}
const obj4 = {5:"e" , 6: "f"}


// const obj3 = { obj1 ,obj2 }

// const obj3 = Object.assign({}, obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)


const user = [
    {
        id: 1,
        email: "abhi@133"
    },
    {
        id: 2,
        email: "kaju@878"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course ={
    coursename: "JS In Hindi",
    price: "999",
    courseinstrustor: "Hitesh"
}

// course.courseinstrustor

const {courseinstrustor:instretor} = course
// console.log(courseinstrustor);
console.log(instretor);
 
