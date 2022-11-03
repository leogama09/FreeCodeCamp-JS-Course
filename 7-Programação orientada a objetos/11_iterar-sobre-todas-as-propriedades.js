function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Altere apenas o código abaixo desta linha
for (let property in beagle) {
  if(Dog.hasOwnProperty(property)) {
    ownProps.push(property)
  } else {
    prototypeProps.push(property)
  }
}

console.log(ownProps)
console.log(prototypeProps)