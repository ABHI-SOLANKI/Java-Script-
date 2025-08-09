// if(true){
//   //Compound Statment
//   var a = 10;
//   console.log(a);
// }

const c = 100;
{
//   var a = 10;
  let b = 20;
  const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
}

// console.log(c);
// console.log(b);
// console.log(c);


// LEXICAL BLOCK SCOPE

const a = 20;
{
    const a =200;
    {
        const a = 2000
        console.log(a);
    }
    console.log(a);
}
console.log(a);
