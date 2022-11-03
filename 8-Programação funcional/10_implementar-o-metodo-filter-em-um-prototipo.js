// A variável global
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Altere apenas o código abaixo desta linha
  const newArray = [];
    for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i])
    }
  }
  // Altere apenas o código acima desta linha
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});