'use strict'
const search = (input, target, left, right) => {
  const mid = parseInt((left + right) / 2);
  return ((left > right) ? -1 : ((target < input[mid]) ? search(input, target, left, mid - 1)
    : ((target == input[mid]) ? mid : search(input, target, mid + 1, right))))
}
function binarySearch(input, target) {
  return search(input, target, 0, input.length - 1);
}

module.exports = binarySearch