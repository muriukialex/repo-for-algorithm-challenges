/*
    For example, in array A such that:
    ie. A = [9, 3, 9, 3, 9, 7, 9]

        A[0] = 9  A[1] = 3  A[2] = 9
        A[3] = 3  A[4] = 9  A[5] = 7
        A[6] = 9
        the elements at indexes 0 and 2 have value 9,
        the elements at indexes 1 and 3 have value 3,
        the elements at indexes 4 and 6 have value 9,
        the element at index 5 has value 7 and is unpaired.

    Write a function:

    function solution(A)

    that, given an array A consisting of N integers fulfilling the above conditions,
     returns the value of the unpaired element.

     Take a look at the problem description here
     https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
*/

const nonPairedElement = (A) => {
  let nonPaired = A.filter((item) => {
    return A.indexOf(item) === A.lastIndexOf(item)
  })

  if (nonPaired.length > 1) {
    return nonPaired
  }
  return nonPaired[0]
}

let array1 = [9, 3, 9, 3, 9, 7, 9]
console.log(nonPairedElement(array1))
