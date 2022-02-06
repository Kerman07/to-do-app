import { useState } from "react";
import axios from "axios";

const Item = ({ item, deleteHandler }) => {
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState("");

  const handleEdit = () => {
    axios
      .put(`/api/todos/${item.id}/`, { content, author: "Kera" })
      .then((response) => {
        setEdit(!edit);
        item.content = content;
        setContent("");
      });
  };

  const handleChange = (event) => setContent(event.target.value);

  return (
    <>
      <tr>
        {edit ? (
          <td className="col-6 align-middle">
            <input type="text" onChange={handleChange}></input>
          </td>
        ) : (
          <td className="col-6 align-middle">{item.content}</td>
        )}
        {edit ? (
          <td className="col-3 align-middle">
            <input className="btn btn-outline-warning" type="submit" onClick={handleEdit}></input>
          </td>
        ) : (
          <td className="col-3 align-middle">
            <button
              className="btn btn-outline-primary"
              onClick={() => setEdit(!edit)}
            >
              Edit
            </button>
          </td>
        )}
        <td className="col-3 align-middle">
          <button
            className="btn btn-outline-danger"
            name="delete"
            onClick={() => deleteHandler(item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Item;
