function findLongestWordLength(str) {
  let palavras = str.split(' ')
  let maxLength = 0

  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > maxLength) {
      maxLength = palavras[i].length
    }
  }

  return maxLength
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))