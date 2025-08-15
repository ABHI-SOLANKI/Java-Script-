function isPalindrome(num) {
  let org =num.toString();
  let rev = org.split("").reverse("").join("");
  return org === rev;
}
const Number = 121;
if (isPalindrome(Number)) {
  console.log(Number + " " + "Is A Palindrome");
} else {
    console.log(Number + " " + "Is Not A Palindrome");
    
}