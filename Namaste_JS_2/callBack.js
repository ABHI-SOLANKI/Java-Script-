// console.log("Namste");

// setTimeout(function(){
//     console.log("Java Script");
// },3000)

// console.log("Season 2");

const cart = ["shose", "pants", "kurta"];

api.createOrder(cart, function () {

  api.ProceedToPayment(function () {

    api.showOrderSummery(function () {

      api.updateWallet();

    });
  });
});