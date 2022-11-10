const INCREMENT = 'INCREMENT' 
// Defina uma constante para os tipos de ação de incremento
const DECREMENT = 'DECREMENT' 
// Defina uma constante para os tipos de ação de decremento

const counterReducer = (state = 0, action) => {
  switch(action.type) {

    case INCREMENT:
      return state + 1

    case DECREMENT:
      return state - 1

    default:
      return state
  }
}
// Defina o redutor do contador que incrementará ou decrementará o estado com base na ação que ele recebe

const incAction = () => {
  return {
    type: INCREMENT
  }
} 
// Defina um criador de ação para incrementar

const decAction = () => {
  return {
    type: DECREMENT
  }
}  
// Defina um criador de ação para decrementar

const store = Redux.createStore(counterReducer) 
// Defina a store do Redux aqui, passando para ela os redutores