import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTodos } from "./reducers/todoReducer.js";
import axios from "axios";
import Login from "./components/login.js";
import Home from "./components/home.js";
import Register from "./components/register.js";
import { getCookie } from "./components/csrfToken.js";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [rerender, setRerender] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("LOGGED_USER")) {
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("REACT_TOKEN_AUTH");
      axios.defaults.headers.common["X-CSRFToken"] = getCookie("csrftoken");
      dispatch(getTodos());
    }
  }, [rerender, dispatch]);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home setRerender={setRerender} />
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
