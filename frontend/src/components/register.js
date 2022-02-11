import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setNotification } from "../reducers/notificationReducer";
import userService from "../services/users";
import Notification from "./notification";

const Register = ({ setRerender }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usernameHandler = (event) => setUsername(event.target.value);
  const emailHandler = (event) => setEmail(event.target.value);
  const passwordHandler = (event) => setPassword(event.target.value);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleCreate = async (event) => {
    event.preventDefault();
    const response = await userService.createUser({
      username,
      email,
      password,
    });
    console.log(response);
    if ("error" in response) {
      dispatch(setNotification(response["error"], 5000));
    } else {
      await userService.loginUser({
        username: response.username,
        password: response.password,
      });
      history.push("/home");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-6 container">
        <legend className="border-bottom mb-4">Register</legend>
        <form onSubmit={handleCreate}>
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
              <input type="text" id="email" onChange={emailHandler} required />
              <span className="placeholder">Email:</span>
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
            <button className="btn btn-outline-danger" type="submit">
              Register
            </button>
          </div>
        </form>
        <div className="border-top pt3">
          <small className="text-muted">
            Already have an account?{" "}
            <a className="ml-2" href="/login">
              Log In
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
