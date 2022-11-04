function checkPositive(arr) {
  // Altere apenas o código abaixo desta linha
 return arr.every(function(value) {
    return value > 0
  })

  // Altere apenas o código acima desta linha
}

checkPositive([1, 2, 3, -4, 5]);