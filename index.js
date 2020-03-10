// const test = arr => {
//   for (let i = 1; i > arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {}
//   }
// };

// console.log(test([8, 1, 2, 3, 4, 3, 5, 6, 7]));

const redundant = arr => {
  let unique = arr.filter(function(value) {
    console.log(value);

    return arr.indexOf(value) === arr.lastIndexOf(value);
  });
  return unique[0];
};

console.log(redundant([0, 0, 1, 2, 1]));
