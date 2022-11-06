function htmlColorNames(arr) {
  // Altere apenas o código abaixo desta linha
  let startIndex = 0
  let amoutToDelete = 2
  
  arr.splice(startIndex, amoutToDelete, 'DarkSalmon', 'BlanchedAlmond')
  // Altere apenas o código acima desta linha
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));