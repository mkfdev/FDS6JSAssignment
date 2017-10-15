function checkPalindrom(str) {
  //str2 = str.split('').reverse().join('');
  return str === str.split('').reverse().join('');
}

console.log(checkPalindrom('dad'));
console.log(checkPalindrom('deaaac'));
console.log(checkPalindrom('aooooa'));