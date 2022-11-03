// A variável global
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Altere apenas o código abaixo desta linha
this.forEach(a => newArray.push(callback(a)))
  // Altere apenas o código acima desta linha
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});