// const test = arr => {
//   for (let i = 1; i > arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {}
//   }
// };

// console.log(test([8, 1, 2, 3, 4, 3, 5, 6, 7]));

const redundant = s => {
  if (s.length >= 1 && s.length <= 10000) {
    let answer = s.replace(/[^A-Z]/g, "");
    return answer.length + 1;
  }
};

console.log(redundant("saveChangesInTheEditor"));
