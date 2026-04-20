// Function 1
function calculateTax(amount) {
  return amount * 0.10;
}

// Function 2
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Function 4
function isPalindrome(word) {
  const lowerWord = word.toLowerCase();
  const reversed = lowerWord.split('').reverse().join('');
  return lowerWord === reversed;
}

// Function 5
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100);
  return originalPrice - discount;
}


// DO NOT TOUCH THIS
module.exports = { 
  calculateTax, 
  convertToUpperCase, 
  findMaximum, 
  isPalindrome, 
  calculateDiscountedPrice 
};




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };