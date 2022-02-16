import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../reducers/todoReducer";

const Item = ({ item, setRerender }) => {
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => setContent(event.target.value);

  const handleEdit = () => {
    dispatch(updateTodo(item.id, content)).then(() => {
      setRerender("edt");
      setEdit(!edit);
    });
  };

  const handleDelete = () => {
    dispatch(deleteTodo(item.id)).then(() => {
      setRerender("dut");
    });
  };

  return (
    <>
      {edit ? (
        <tr>
          <td className="col-8 align-middle">
            <input
              type="text"
              onChange={handleChange}
              placeholder={item.content}
              style={{ width: "80%" }}
              required
            ></input>
          </td>
          <td>
            <button
              className="btn btn-sm btn-outline-primary"
              name="edit"
              onClick={handleEdit}
            >
              Submit
            </button>
          </td>
          <td>
            <button
              className="btn btn-sm btn-outline-danger"
              name="cancel"
              onClick={() => setEdit(!edit)}
            >
              Cancel
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <td className="col-8 align-middle">{item.content}</td>
          <td>
            <button
              className="btn btn-sm btn-outline-primary item-btn"
              onClick={() => setEdit(!edit)}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="btn btn-sm btn-outline-danger"
              name="delete"
              onClick={handleDelete}
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default Item;
