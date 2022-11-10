const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Altere o código abaixo desta linha
  if (action.type === "LOGIN") {
    return {
    login: true
    }
  } else {
    return state
  }
  // Altere o código acima desta linha
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};