function alphabeticalOrder(arr) {
  // Altere apenas o código abaixo desta linha

  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1: 1
  })
  // Altere apenas o código acima desta linha
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);