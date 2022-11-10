const store = Redux.createStore(
  (state = 5) => state
);

// Altere o código abaixo desta linha
let currentState = store.getState() 