'use strict'

const inputWords = ['Apple', 'Banana', 'Cherry', 'Apple']

// Count how many occurrences of the word the array contains
function countWords (arr) {
  return arr.reduce(function (countMap, word) {
    countMap[word] = ++countMap[word] || 1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}

console.log(countWords(inputWords))
