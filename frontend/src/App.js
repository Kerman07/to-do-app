import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/login.js";
import Home from "./components/home.js";
import Register from "./components/register.js";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

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
        <Switch>
          <Route exact path="/">
            <Login setRerender={setRerender} />
          </Route>

          <Route path="/home">
            {localStorage.getItem("REACT_TOKEN_AUTH") ? (
              <Home
                setRerender={setRerender}
                items={items}
                deleteHandler={deleteHandler}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route path="/register">
            <Register setRerender={setRerender} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
