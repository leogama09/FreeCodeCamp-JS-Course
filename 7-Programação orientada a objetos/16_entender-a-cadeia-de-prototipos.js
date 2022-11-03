function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Object.prototype.isPrototypeOf(beagle);  // retorna verdadeiro

// Corrija o código abaixo para que ele seja avaliado como verdadeiro
Object.isPrototypeOf(Dog.prototype);