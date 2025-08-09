// Functon Statement Aka Function Declaration

function a(){
    console.log("A called");
    
}
a();

// Finction Expression

var b = function(){
    console.log("B called");
    
}
b()


// Anonymous Function

// function (){
// }

// Named Function

var c = function xyz(){
    console.log("Named Function");
    
}
c()

// Parameter & Argument

function d(paaram1,param2){
    console.log(d);
    
}
d(1,2) // Argument

// First Class Function

var e = function(param1){
    return function xyz (){

    }
}

console.log(e());

// First Class Citizens

const f = function(param2){
    return function abc(){
    }
}
console.log(f());


// Arrow Function