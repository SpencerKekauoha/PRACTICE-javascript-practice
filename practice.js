//daily practice javascript toy problem
//
//p = number of peaks at google


// #1 take a string and reverse it

var reverseStr = function(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStr('pizza'));


var reverseStr = function(str) {
  var newStr = '';
  for(var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

console.log(reverseStr('pizza'));

// #2 reverse an array

var reverseArr = function(arr) {
  var newArr = [];
  for(var i = arr.length; i > 0; i--) {
    newArr.push(i);
  }
  return newArr;
};

console.log(reverseArr([1, 2, 3, 4, 5]));
