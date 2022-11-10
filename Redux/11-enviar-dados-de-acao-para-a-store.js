const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Altere o código abaixo desta linha
    case ADD_NOTE:
      return action.text
    // Altere o código acima desta linha
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Altere o código abaixo desta linha
  return {
    type: ADD_NOTE,
    text: note
  }
  // Altere o código acima desta linha
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());