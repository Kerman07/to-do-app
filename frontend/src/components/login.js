import { useState } from "react";
import { useHistory } from "react-router-dom";
import userService from "../services/users.js";
import Notification from "./notification.js";
import { setNotification } from "../reducers/notificationReducer.js";

const Login = ({ setRerender }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await userService.loginUser({ username, password });
    console.log(res);
    if (res.token !== "") {
      localStorage.setItem("REACT_TOKEN_AUTH", "Token " + res.token);
      setRerender("r");
      history.push("/home");
    } else {
      setNotification("username or password are not correct", 5000);
      setRerender("c");
    }
  };

  const usernameHandler = (event) => setUsername(event.target.value);
  const passwordHandler = (event) => setPassword(event.target.value);

  return (
    <>
      <div className="container mt-5" style={{ marginLeft: "30%" }}>
        <div className="content-section col-6">
          <legend className="border-bottom mb-4">Log In</legend>
          <Notification />
          <form onSubmit={handleLogin}>
            <label className="custom-field">
              <input
                type="text"
                id="username"
                onChange={usernameHandler}
                required
              />
              <span className="placeholder">Username:</span>
            </label>

            <label className="custom-field">
              <input
                type="password"
                id="password"
                onChange={passwordHandler}
                required
              />
              <span className="placeholder">Password:</span>
            </label>

            <div className="form-group">
              <button
                className="btn btn-outline-danger"
                style={{ marginLeft: "30%" }}
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
                Sign Up Now
              </a>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
