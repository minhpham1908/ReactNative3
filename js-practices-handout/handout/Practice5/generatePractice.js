'use strict'

function generate(testLengthArray){
  return Array.from({length : testLengthArray.length})
    .map(item => ({
      input: Array.from({length: item}).map(item => []),
      target: 0,
      output: -1
    })
  );
}

module.exports = generate
