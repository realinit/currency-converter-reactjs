

const todos = (state = false, action) => {

    console.log(action);

  switch (action.type) {
    case "ADD_TODO":
      return [
         ...state,
         {
           text: action.text,
           completed: false
         }
       ]
    case "DELETE_TODO": {
         const newState = Object.assign([], state);
          console.log("del>>>>>>>>>>>>>>>>>>>>>",action.text.todo.text.username);
         const indexOfDelete = state.findIndex(del => {

           return del.text.username == action.text.todo.text.username
         })
         newState.splice(indexOfDelete, 1);
         return newState;
       }
    default:
      return state;
  }
};

export default todos;
