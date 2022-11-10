const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Altere o código abaixo desta linha
  switch(action.type) {
    case "LOGIN":
    return {
      authenticated: true
    }
    case "LOG OUT":
    return {
      authenticated: false
    }
    default:
    return defaultState
  }
  // Altere o código acima desta linha
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};