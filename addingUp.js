/*
Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, 
return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

const addingUp = (sampleArray, k) => {
  let res = false
  for (let i = 0; i < sampleArray.length; i++) {
    let remainder = k - sampleArray[i]
    if (sampleArray.indexOf(remainder) != -1) {
      res = true
    }
  }
  return res
}

console.log(addingUp([10, 15, 3, 7, 2], 17))

console.log(addingUp([10, 15, 3, 7, 2], 18))

console.log(addingUp([10, 15, 3, 7, 2], 14))
