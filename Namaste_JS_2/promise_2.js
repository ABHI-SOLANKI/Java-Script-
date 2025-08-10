const cart = ["shose", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Produce

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create Order
    // validCart
    // Order Id
    if (!validCart(cart)) {
      const err = new Error("Cart Is Not Valid");
      reject(err);
    }
    // Logic For Craete Order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 3000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successfull");
  });
}

function validCart(cart) {
  return true;
}
