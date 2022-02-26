/*
    Write a function: 

    that, given a positive integer N,
    returns the length of its longest binary gap.
    The function should return 0 if N doesn't contain a binary gap.

      eg. if:  
            N is 32, return 0
            N is 9,  return 2

*/

const longestBinaryGap = (N) => {
  const bin = Math.abs(N).toString("2")
  let finalMax = 0,
    currentMax = 0

  for (i = 0; i < bin.length; i++) {
    if (bin[i] == "0") {
      currentMax++
    }

    if (bin[i] == "1" && i != 0) {
      finalMax = Math.max(finalMax, currentMax)
      currentMax = 0
    }
  }

  return parseInt(finalMax)
}

// console.log(toBinary(9)) //=> 1001 ==> biggest binaryGap is 2
// console.log(toBinary(32)) //=> 100000
console.log(longestBinaryGap(9))
