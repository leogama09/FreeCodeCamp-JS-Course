// Declare a variável myGlobal abaixo desta linha


function fun1() {
  // Atribua 5 para oopsGlobal aqui
oopsGlobal = 5
}
let myGlobal = 10

// Altere apenas o código acima desta linha

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}