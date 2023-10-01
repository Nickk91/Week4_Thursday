// Front-end development: Loops
// JavaScript – forEach & map
// The following exercise contains the following subjects:
// ● map
// ● forEach
// Instructions
// Answer the questions below and use the map or the
// forEach method :

// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const doubleValues = numbers.map(function (num) {
  return num * 2;
});
console.log(doubleValues);

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const arrEven = [];
function onlyEvenValues(arr) {
  arr.forEach((num) => {
    if (num % 2 === 0) {
      arrEven.push(num);
    }
  });
  return arrEven;
}
console.log(onlyEvenValues(numbers));

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
const misc = ["LOL", 1, "OMG", 3, "BRB", 5, 6, 7, 8];
const onlyString = [];
const firstLast = [];
function onlyStringValues(arr) {
  arr.forEach((item) => {
    if (typeof item === "string") {
      onlyString.push(item);
    }
  });
  firstLast.push(onlyString[0]);
  firstLast.push(onlyString[onlyString.length - 1]);
  return firstLast;
}

console.log(onlyStringValues(misc));

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.

function vowelCount(str) {
  const vowels = { a: 0, o: 0, u: 0 };
  const arrFromString = str.toLowerCase().split("");
  arrFromString.forEach((letter) => {
    if (vowels[letter] !== undefined) {
      vowels[letter] += 1;
      console.log(letter);
    }
  });

  return vowels;
}

console.log(vowelCount("I said Hello whAts UP"));
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

function capitalize(str) {
  let arr = str.split(" ");
  let map = arr.map((cap) => cap.toUpperCase());
  return map.join(" ");
}

console.log(capitalize("I said Hello whAts UP"));

// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
