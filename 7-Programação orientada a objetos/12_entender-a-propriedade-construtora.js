function Dog(name) {
  this.name = name;
}

// Altere apenas o código abaixo desta linha
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true
  } else {
    return false
  }
}