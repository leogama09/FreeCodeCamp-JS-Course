const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Altere o código abaixo desta linha
const mapDispatchToProps = (dispatch) => {
  return {
  submitNewMessage: function(message) {
    dispatch(addMessage(message))
    } 
  }
}