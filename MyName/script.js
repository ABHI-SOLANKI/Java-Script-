document.getElementById("btn").addEventListener("click", function () {
  let userName = document.getElementById("name").value; // Get input value
  if (userName == "") {
    alert("Please enter your name!");
  } else {
    document.getElementById("output").innerHTML = "Hello, " + userName + "! 👋";
  }
});
