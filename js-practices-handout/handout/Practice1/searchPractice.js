'use strict'

//binary
function search(input, target) {
  let left = 0;
  let right = parseInt(input.length-1);
  while (right>=left) {
    let mid = parseInt((left + right) / 2);
    if(input[mid] == target) return mid;
    else if (input[mid] < target) left = mid + 1;
    else if (input[mid] > target) right = mid - 1;
  }
  return -1;

}

// function search(input, target) {
//   return  input.indexOf(target);
// }


module.exports = search
