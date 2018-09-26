const ADD_TODO = "ADD_TODO";
export const addTodo = (text)  => {
    console.log(text)
  return {
      type: ADD_TODO,
      text
  };
}
export const deleteTodo = (text)  => {
  return {
      type: "DELETE_TODO",
      text
  };
}
