import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import userService from "../services/users.js";
import Notification from "./notification.js";
import { setNotification } from "../reducers/notificationReducer.js";

const Login = ({ setRerender }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await userService.loginUser({ username, password });
    if (res.token !== "") {
      setRerender("r");
      history.push("/home");
    } else {
      dispatch(setNotification("Username or password are not correct!", 5000));
      setRerender("c");
    }
  };

  const usernameHandler = (event) => setUsername(event.target.value);
  const passwordHandler = (event) => setPassword(event.target.value);

  return (
    <>
      <div className="container mt-5">
        <div className="col-6 container">
          <legend className="border-bottom mb-4">Log In</legend>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="custom-field">
                <input
                  type="text"
                  id="username"
                  onChange={usernameHandler}
                  required
                />
                <span className="placeholder">Username:</span>
              </label>
            </div>

            <div className="form-group">
              <label className="custom-field">
                <input
                  type="password"
                  id="password"
                  onChange={passwordHandler}
                  required
                />
                <span className="placeholder">Password:</span>
              </label>
            </div>

            <Notification />

            <div className="form-group">
              <button
                className="btn btn-outline-danger"
                style={{ display: "inline", float: "none" }}
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="border-top pt3">
            <small className="text-muted">
              Don't have an account?{" "}
              <a className="ml-2" href="/register">
                Sign Up
              </a>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
