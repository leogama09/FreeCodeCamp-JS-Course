function testSize(num) {
  // Altere apenas o código abaixo desta linha
if (num < 5) {
  return "Tiny"
} else if (num < 10) {
  return "Small"
} else if (num < 15) {
  return "Medium"
} else if (num < 20) {
  return "Large"
} else if (num >= 20) {
  return "Huge"
}

  // Altere apenas o código acima desta linha
}

console.log(testSize(17))