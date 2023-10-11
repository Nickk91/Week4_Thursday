// 1. max

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxValue = data.reduce((max, currentVal) => {
  if (currentVal > max) return currentVal;
  return max;
});
console.log(maxValue);

// 2. the sum of even numbers

const even = (arr) =>
  arr.reduce((accumulator, curentValue) => {
    return curentValue % 2 === 0 ? accumulator + currentValue : accumulator;
  }, 0);

// 3. average
function avg(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

console.log(avg(data));
