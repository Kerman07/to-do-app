import { useState } from "react";
import todoService from "../services/todos";

const NewTodo = () => {
  const [todo, setTodo] = useState("");

  const handleCreate = async (event) => {
    event.preventDefault();
    console.log(todo);
    await todoService.createTodo(todo);
    console.log(todo);
  };

  return (
    <div className="container col-6">
      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label className="custom-field new-todo">
            <input
              type="text"
              id="todo"
              onChange={(e) => setTodo(e.target.value)}
              required
            />
            <span className="placeholder">New Todo:</span>
          </label>
        </div>

        <div className="form-group">
          <button
            className="btn btn-outline-danger"
            style={{ display: "inline", float: "none" }}
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
