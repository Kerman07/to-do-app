import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoReducer";

const NewTodo = ({ setRerender }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleCreate = async (event) => {
    event.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
    setRerender("nt");
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <div className="flexbox">
          <label className="custom-field new-todo">
            <input
              type="text"
              id="todo"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              required
            />
            <span className="placeholder">New Todo:</span>
          </label>

          <button
            className="btn btn-success create-btn new-todo"
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
