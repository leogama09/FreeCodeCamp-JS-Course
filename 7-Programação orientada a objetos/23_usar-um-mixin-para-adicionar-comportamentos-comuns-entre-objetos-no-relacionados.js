let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Altere apenas o código abaixo desta linha
let glideMixin = function(obj) {
  obj.glide = function() {
  }
}

glideMixin(bird)
glideMixin(boat)

bird.glide()
boat.glide()