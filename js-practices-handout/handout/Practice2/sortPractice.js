'use strict'

// function sort(input) {
//   let n = input.length;
//   for(let j = 0;j<n-1;j++) {
//     for (let i = 0; i<n-1; i++) {
//       if (input[i] > input [i+1]) {
//         let temp = input[i];
//         input[i] = input[i+1];
//         input[i+1] =temp;
//       }
//     }
//   }
//   return input;
// }
function swap(x, y) {
  let temp = x;
  x =y;
  y =temp;
}

function sort(input) {
  if (input.length <= 1) {
    return input;
  }
  var pivot = input[0];
  var left = []; 
  var right = [];
  for (var i = 1; i < input.length; i++) {
    input[i] < pivot ? left.push(input[i]) : right.push(input[i]);
  }

  return sort(left).concat(pivot, sort(right));
}
module.exports = sort
