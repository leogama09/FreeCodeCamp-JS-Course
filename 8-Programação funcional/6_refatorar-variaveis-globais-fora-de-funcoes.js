// A variável global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Altere o código abaixo desta linha
function add(arr, bookName) {
  let newArr = [...arr]
  newArr.push(bookName);
  return newArr;

  // Altere o código acima desta linha
}

// Altere o código abaixo desta linha
function remove(arr, bookName) {
  let newArr = [...arr]
  if (newArr.indexOf(bookName) >= 0) {

    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;

    // Altere o código acima desta linha
    }
}