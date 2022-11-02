function findLongestWordLength(str) {
  return str
  .split(' ')
  .reduce((maior, palavra) => Math.max(maior, palavra.length), 0)
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));