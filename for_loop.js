for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 Is Best Number");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outter loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = '+  i * j ); 
        
    }
    
}
let myarray = ["Ironman","Superman","Batman"]
// console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}


// Break , Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);    
    
}