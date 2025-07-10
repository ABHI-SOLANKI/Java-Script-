//  Immediately Invoked function expresion (IIFE)

(function chai() {
    // named IIFE
  console.log(`DB CONNCTED`);
})();

( (name) => {
  console.log(`DB CONNECT TOO ${name}`);
} )("abbi")
