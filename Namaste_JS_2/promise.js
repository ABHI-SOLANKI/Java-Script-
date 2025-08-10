const cart = ["shose", "pants", "kurta"];

createOrder(cart, function (orderId) {
  ProceedToPayment(orderId, function (paymentInfp) {
    showOrderSummery(paymentInfp, function () {
      updateWalletBalance();
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    return ProceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummery(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  })







// const GITHUB_API = "https://api.github.com/ABHI-SOLANKI";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function(data){
//     console.log(data);

// })
