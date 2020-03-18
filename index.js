// const test = arr => {
//   for (let i = 1; i > arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {}
//   }
// };

// console.log(test([8, 1, 2, 3, 4, 3, 5, 6, 7]));

const redundant = q => {
  if (q.length <= 0) {
    return;
  }

  let initial = [];
  let chaos = 0;
  let diff;
  for (let i = 1; i <= q.length; i++) {
    initial.push(i);
  }

  for (let d = 0; d <= q.length - 1; d++) {
    diff = 0;
    if (initial[d] === q[d]) {
      continue;
    } else if (initial[d + 1] === q[d]) {
      diff = 1;
    } else if (initial[d + 2] === q[d]) {
      diff = 2;
    } else {
      console.log("d", d);
      console.log(initial);

      diff = 3;
    }

    if (diff === 3) {
      console.log("Too chaotic");
      break;
    } else if (diff === 2) {
      chaos += 2;
      var tmp = initial[d + 2];

      initial[d + 2] = initial[d + 1];
      initial[d + 1] = initial[d];
      initial[d] = tmp;
    } else if (diff === 1) {
      chaos++;
      var tmp = initial[d];
      initial[d] = initial[d + 1];
      initial[d + 1] = tmp;
    }
  }

  if (diff != 3) {
    console.log(chaos);
  }
};

redundant([2, 1, 5, 3, 4]);
