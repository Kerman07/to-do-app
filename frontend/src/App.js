import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/login.js";
import Table from "./components/table.js";
import Register from "./components/register.js";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

const App = () => {
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [rerender, setRerender] = useState("");

  useEffect(() => {
    axios.get("/api/todos/").then((response) => {
      setItems(response.data);
    });
  }, []);

  const deleteHandler = (id) => {
    axios.delete(`/api/todos/${id}/`).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  return (
    <div>
      <BrowserRouter>
        {localStorage.getItem("REACT_TOKEN_AUTH") && (
          <>
            <button
              style={{ float: "right" }}
              className="btn btn-warning"
              onClick={() => {
                localStorage.removeItem("REACT_TOKEN_AUTH");
                setRerender("");
              }}
            >
              log out
            </button>
            <Route path="/home">
              <Table items={items} deleteHandler={deleteHandler} />
            </Route>
            <Redirect to="/home" />
          </>
        )}
        {!localStorage.getItem("REACT_TOKEN_AUTH") && (
          <>
            <Route path="/login">
              <Login setRerender={setRerender}/>
            </Route>
            <Route path="/register">
              <Register setRerender={setRerender}/>
            </Route>
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
