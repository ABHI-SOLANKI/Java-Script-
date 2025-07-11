// if
// const temp = 41;
// if (temp === 40) {
//   console.log("less then 50");
// } else {
//   console.log("Temp is greater than 50");
// }

//  < , > , <= , >= , == , != , === , !==



// const score = 200
// if (score > 100) {
//     let power = "Fly"
//     console.log(`Power Is : ${power}`);
    
// }
//     console.log(`Power Is : ${power}`);



// const balcnce = 10000

// if(balcnce > 45424) console.log("Balcne is more"),console.log(`bal is More  `);

// if (balcnce < 5000) {
//     console.log("Less Than 5000");
// }
// else  if (balcnce < 7500) {
//     console.log("Less than 7500");
// }
// else if (balcnce < 9000) {
//     console.log("less than 9000");
// }
// else{
//     console.log("less than 12000");
    
// }


const userLoggesIn = true
const debidcard = true
const userLoggesInFromGoogle = false
const userLoggesInFromGmail = true

if (userLoggesIn && debidcard && 2 == 3 ) {
    console.log("Allow to buy course");
    
}

if (userLoggesInFromGoogle || userLoggesInFromGmail) {
    console.log("User Logged In ");
    
}