import todoService from "../services/todos";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.data;
    case "ADD_TODO":
      return state.concat(action.data);
    case "EDIT_TODO":
      return state.map((el) => (el.id !== action.data.id ? el : action.data));
    case "DELETE_TODO":
      return state.filter((el) => el.id !== action.data.id);
    default:
      return state;
  }
};

export const getTodos = () => {
  return async (dispatch) => {
    const response = await todoService.getTodos();
    dispatch({
      type: "GET_TODOS",
      data: response,
    });
  };
};

export const addTodo = (content) => {
  return async (dispatch) => {
    const response = await todoService.createTodo(content);
    dispatch({
      type: "ADD_TODO",
      data: response,
    });
  };
};

export const updateTodo = (id, content) => {
  return async (dispatch) => {
    const response = await todoService.editTodo(id, content);
    dispatch({
      type: "EDIT_TODO",
      data: response,
    });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await todoService.removeTodo(id);
    dispatch({
      type: "DELETE_TODO",
      data: id,
    });
  };
};

export default todoReducer;
