import { useState } from "react";
import { useHistory } from "react-router-dom";
import userService from "../services/users";

const Register = ({ setRerender }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usernameHandler = (event) => setUsername(event.target.value);
  const emailHandler = (event) => setEmail(event.target.value);
  const passwordHandler = (event) => setPassword(event.target.value);

  const history = useHistory();

  const handleCreate = () => {
    const response = userService.createUser({ username, email, password });
    if (response !== "error") {
      setUsername("");
      setEmail("");
      setPassword("");
    }
    history.push("/");
  };

  return (
    <div className="container mt-5" style={{ marginLeft: "30%" }}>
      <div className="content-section col-6">
        <legend className="border-bottom mb-4">Register</legend>
        <form onSubmit={handleCreate}>
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
            <input type="text" id="email" onChange={emailHandler} required />
            <span className="placeholder">Email:</span>
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
              Register
            </button>
          </div>
        </form>
        <div className="border-top pt3">
          <small className="text-muted">
            Already have an account?{" "}
            <a className="ml-2" href="/login">
              Log In Now
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
