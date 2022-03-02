/*
 story
 An array A consisting of N different integers is given.
  The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

    Your goal is to find that missing element.

    Write a function:

    function solution(A);

    that, given an array A, returns the value of the missing element.

    For example, given array A such that:

    A[0] = 2
    A[1] = 3
    A[2] = 1
    A[3] = 5
    the function should return 4, as it is the missing element.

    Link to this challenge can be seen here
    https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

*/

const missingElem = (A) => {
  const missingVals = []
  const sortedArray = A.sort((a, b) => a - b)
  for (let i = 1; i <= sortedArray[sortedArray.length - 1]; i++) {
    if (A.indexOf(i) === -1) {
      missingVals.push(i)
    }
  }

  if (missingVals.length > 1) {
    return missingVals
  }
  return missingVals[0]
}

let array1 = [5, 1, 3, 2, 12]

console.log(missingElem(array1))
