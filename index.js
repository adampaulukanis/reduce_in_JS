'use strict'

// Assertion
function AssertionFailed (message = 'AssertionFailed') {
  let instance = new Error (message)
  instance.message = message

  return instance
}
AssertionFailed.prototype = Object.create(Error.prototype)

function assert (test = true, message = 'Assert') {
  if (!Boolean (test)) {
    throw new AssertionFailed(message)
  }
}
// Assertion Ends

let exampleArray = [115, 26, 99, 1, 9393754]

const callbackFunction = function (
  accumulator,
  currentElement,
  currentIndex,
  array
) {
  // Get the maximum by checking first if there is a maximum from the previous step
  const maximum = accumulator.maximum
  ? // If there is, then check if the current element is higher than the previous maximum
    accumulator.maximum < currentElement
      ? currentElement
      : accumulator.maximum
    : // If there isn't, use the current element right away
      currentElement

  // Get the minimum by checking first if there is a minimum from the previous step
  const minimum = accumulator.minimum
  ? // If there is, then check if the current element is lower than the previous minimum
    accumulator.minimum > currentElement
      ? currentElement
      : accumulator.minimum
    : // If there isn't, use the current element right away
      currentElement

  // Get the average by checking if we're at the last step (where it we can finally calculate the average)
  const average = currentIndex === array.length - 1
    ? (accumulator.average + currentElement) / array.length
    : // If we're not at the last step, check if there even is a value from the previous step
    accumulator.average
      ? accumulator.average + currentElement
      : currentElement

  // Return the value for the next element
  return {
    maximum,
    minimum,
    average
  }
}

console.log(exampleArray)
const result = exampleArray.reduce(callbackFunction, {})
console.log(result)

assert(result.maximum === 9393754)
assert(result.minimum === 1)
let sum = 0
exampleArray.forEach(function (el) {
  sum += el
})
assert(result.average === sum / exampleArray.length)
