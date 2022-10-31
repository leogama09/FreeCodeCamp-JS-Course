// Configuração
function phoneticLookup(val) {
  let result = "";

  // Altere apenas o código abaixo desta linha
  let lookup = {
   "alpha":   "Adams",
   "bravo":   "Boston",
   "charlie": "Chicago",
   "delta":   "Denver",
   "echo":    "Easy",
   "foxtrot": "Frank"
  }

result = lookup[val]

  // Altere apenas o código acima desta linha
  return result;
}

console.log(phoneticLookup("charlie"));