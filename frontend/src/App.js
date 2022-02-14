import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/login.js";
import Home from "./components/home.js";
import Register from "./components/register.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import todoService from "./services/todos.js";

const App = () => {
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [rerender, setRerender] = useState("");

  // todo: move this to component
  useEffect(() => {
    todoService.getTodos().then((response) => setItems(response));
  }, [rerender]);

  const deleteHandler = (id) => {
    axios.delete(`/api/todos/${id}/`).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home
              setRerender={setRerender}
              items={items}
              deleteHandler={deleteHandler}
            />
          </Route>

          <Route path="/register">
            <Register setRerender={setRerender} />
          </Route>

          <Route path="/">
            <Login setRerender={setRerender} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
