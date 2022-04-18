/*
    Given an unsorted array of integers and a number n,
     find the subarray of length n that has the largest sum.

    eg.
    largestSubarraySum([3,1,4,1,5,9,2,6], 3)
    [9, 2, 6] 

*/

const largestSubarraySum = (ourArray, size) => {
	let sumArray = []
	let currentLargest = 0
	let solutionArray = []

	for (let i = 0; i < ourArray.length; i++) {
		if (i <= ourArray.length - size) {
			sumArray.push(ourArray[i] + ourArray[i + 1] + ourArray[i + 2])

			if (currentLargest < Math.max(...sumArray)) {
				solutionArray.splice(0, 3)
				solutionArray = [...[ourArray[i]], ...[ourArray[i + 1]], ...[ourArray[i + 2]]]
			}
		}
	}
	return solutionArray
}

let result = largestSubarraySum([3, 1, 4, 1, 5, 9, 2, 6], 3) //return [9,2,6]
// let result = largestSubarraySum([1, 2, 3, 4, 5]) //return [3,4,5]
console.log(result)
