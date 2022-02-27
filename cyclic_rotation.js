/*
  Write a function:

  function rotateNtimes(A, K)

that, given an array A consisting of N integers and an integer K,
returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

    Take a look at the problem description here
    https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
*/

const rotateNtimes = (arrayT, nTimes) => {
  if (arrayT.length === 0) {
    return arrayT
  }
  const arraySolution = [...arrayT]
  for (let i = 0; i < nTimes; i++) {
    let itemRemoved = arraySolution.pop()
    arraySolution.unshift(itemRemoved)
  }
  return arraySolution
}

let arrayToUse = [1, 2, 3, 4]
let arrayToUse2 = [3, 8, 9, 7, 6]

console.log(rotateNtimes(arrayToUse, 3)) //sh'ld log [2, 3, 4, 1]
console.log(rotateNtimes(arrayToUse, 4)) //sh'ld log [1, 2, 3, 4]
console.log(rotateNtimes(arrayToUse2, 3)) //sh'ld log [9, 7, 6, 3, 8]
