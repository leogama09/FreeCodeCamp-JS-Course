const ADD_TO_DO = 'ADD_TO_DO';

// Uma lista de frases que representam as tarefas a fazer:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Não mude o estado aqui ou os testes vão falhar
      return state.concat(action.todo)

      default:
      return state
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);