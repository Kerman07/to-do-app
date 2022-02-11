import axios from "axios";

const loginUser = async ({ username, password }) => {
  try {
    const response = await axios.post("/api-token-auth/", {
      username,
      password,
    });
    localStorage.setItem("REACT_TOKEN_AUTH", "Token " + response.data.token);
    return response.data;
  } catch (e) {
    return { token: "" };
  }
};

const createUser = async ({ username, email, password }) => {
  try {
    await axios.post("/register/", {
      username,
      email,
      password,
    });
    return { username, password };
  } catch (e) {
    const errors = e.response.data;
    if (errors.username) return { error: "username: " + errors.username };
    if (errors.email) return { error: "email: " + errors.email[0] };
    if (errors.password) return { error: errors.password[0] };
  }
};

const userService = { createUser, loginUser };
export default userService;
