function largestOfFour(arr) {
  let maxNumbers = []
  for (let i = 0; i < arr.length; i++) {
    maxNumbers.push(Math.max.apply(null, arr[i]))
  }

  return maxNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);