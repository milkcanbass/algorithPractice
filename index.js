// const test = arr => {
//   for (let i = 1; i > arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {}
//   }
// };

// console.log(test([8, 1, 2, 3, 4, 3, 5, 6, 7]));

const redundant = (a, b) => {
  if (a === 0) {
    return b;
  }

  if (b.length >= 1) {
    for (let i = 1; i <= a; i++) {
      let num = b[0];
      b.push(num);
      b.shift();
    }
  }
  return b;
};

console.log(redundant(4, [1, 2, 3, 4, 5]));
