const reducer = (state = 5) => {
  return state;
}

// Os métodos do Redux estão disponíveis a partir de um objeto do Redux
// Exemplo: Redux.createStore()
// Defina a store aqui:
let store = Redux.createStore(reducer)