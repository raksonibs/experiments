function addToDo(message) {
  return {
    type: 'ADD_TODO',
    message: message,
    completed: false
  }
}
// type should be unique name indicates intention of action

function completeTodo(index) {
  return {
    type: 'COMPLETE_TODO',
    index: index
  };
}

function deleteTodo(index) {
  return {
    type: 'DELETE_TODO',
    index: index
  };
}

function clearTodo() {
  return {
    type: 'CLEAR_TODO'
  };
}