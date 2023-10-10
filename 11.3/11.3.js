// Front-end development: Arrays
// JavaScript – Data massaging
// The following exercise contains the following subjects:
// ● Array
// Instructions
// We are getting this data from an API:
const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
// We are not getting the data as we want it. We are going to need
// to massage the data.
// Create separate functions for each question below:
// 1. Create a function that returns all the names from the array.

names = data.map(function (datum) {
  return datum.name;
});
console.log(names);

// 2. Create a function that returns all the objects that are born
// before 1990.
let arr2 = [];
function old(arr) {
  arr.forEach((Object) => {
    let y = new Date(Object.birthday);
    let year = y.getFullYear();
    if (year < 1990) {
      arr2.push(Object);
    }
  });
  return arr2;
}
console.log(old(data));
// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.
// {
//   name: "John",
//   birthday: "1-1-1995",
//   favoriteFoods: {
//     meats: ["hamburgers", "sausages"],
//     fish: ["salmon", "pike"],
//   },

// 3
function foodCounter(arr) {
  let foodCount = {};
  arr.forEach((Object) => {
    for (const foodType in Object.favoriteFoods) {
      for (const food of Object.favoriteFoods.foodType) {
        if (foodCount[food]) {
          foodCount[food]++;
        } else {
          foodCount[food] = food;
        }
      }
    }
  });
  return foodCount(foodCounter(data));
}
console.log();

// Example:
// {
// hamburgers: 3,
// sausages: 1,
// salmon: 3,
// pike: 2,
// steak: 1,
// lamb: 2,
// tuna: 2,
// barracuda: 1,
// ham: 1,
// chicken: 1,
// bird: 1,
// rooster: 1,
// anchovies: 1
// }
