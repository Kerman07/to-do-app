import axios from "axios";

const getTodos = async () => {
  const response = await axios.get("api/todos/", {
    headers: {
      Authorization: localStorage.getItem("REACT_TOKEN_AUTH"),
    },
  });
  return response.data;
};

const createTodo = async (content) => {
  const response = await axios.post(
    "/api/todos/",
    {
      content,
    },
    {
      headers: {
        Authorization: localStorage.getItem("REACT_TOKEN_AUTH"),
      },
    }
  );
  return response.data;
};

const todoService = { createTodo, getTodos };
export default todoService;
