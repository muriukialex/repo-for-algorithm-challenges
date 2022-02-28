/*
    this is my own simulation of an algoritm challenge

    the question am asking myself is: 

    how can we go through an array inside another array and add each item in that array
    and return the total
*/

const addItemsInArrayInArray = (twoDArray) => {
  let total = 0
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      total += twoDArray[i][j]
    }
  }
  return total
}

let threeDarray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 1, 1],
]

let FourDarray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]

console.log(addItemsInArrayInArray(threeDarray)) //returns 48
console.log(addItemsInArrayInArray(FourDarray)) //return 136
