import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Login = ({ setRerender }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("/api-token-auth/", { username: username, password: password })
      .then((res) => {
        localStorage.setItem("REACT_TOKEN_AUTH", "Token " + res.data.token);
        setRerender("r");
      });
  };

  const usernameHandler = (event) => setUsername(event.target.value);
  const passwordHandler = (event) => setPassword(event.target.value);

  return (
    <>
      {localStorage.getItem("REACT_TOKEN_AUTH") && <Redirect to="/home" />}
      <div>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" onChange={usernameHandler}></input>
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={passwordHandler}
          ></input>
          <input type="submit"></input>
        </form>
        <a href="/register">Don't have an account? Register here</a>
      </div>
    </>
  );
};

export default Login;
