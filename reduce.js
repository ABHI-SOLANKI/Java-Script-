const num = [1, 2, 3];

// const total = num.reduce(function(acc,currval ){
//     console.log(`acc:${acc} and currval:${currval} `);

//     return acc + currval
// }, 0)
const total = num.reduce((acc, currval) => acc + currval, 0);

console.log(total);


const shoppingcart = [
    {
        itemname:"js ",
        price:299
    },
    {
        itemname:"mo dev ",
        price:2995
    },
    {
        itemname:"ds ",
        price:11299
    }
]

const all= shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(all);
