import axios from "axios";

const getTodos = async () => {
  const response = await axios.get("/api/todos/");
  return response.data;
};

const createTodo = async (content) => {
  const response = await axios.post("/api/todos/", {
    content,
  });
  return response.data;
};

const editTodo = async (id, content) => {
  const response = await axios.put(`/api/todos/${id}/`, { content });
  return response.data;
};

const removeTodo = async (id) => {
  await axios.delete(`/api/todos/${id}/`);
};

const todoService = { createTodo, editTodo, getTodos, removeTodo };
export default todoService;
