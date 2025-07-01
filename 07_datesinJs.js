// DATES

let myDates =  new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toISOString());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleTimeString());
// console.log(myDates.toUTCString());
// console.log(myDates.toTimeString());
// console.log(myDates.toJSON());

// console.log(typeof(myDates))

// let mycreatedDates = new Date(2023,10,19)
// let mycreatedDates = new Date(2023,10,19.5,5)
// let mycreatedDates = new Date("2003-05-14")
let mycreatedDates = new Date("10-19-2023")
// console.log(mycreatedDates.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDates.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getMonth());
// console.log(newdate.getHours());

newdate.toLocaleString('default', {
    weekday: "long"    
})
console.log(newdate);