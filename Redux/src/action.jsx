export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE = 'TOGGLE';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
  
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})

export const toggle = (id) => ({
    type: TOGGLE,
    payload: id
})