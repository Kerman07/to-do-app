import axios from "axios";

const loginUser = async ({ username, password }) => {
  const response = await axios.post("/api-token-auth/", {
    username,
    password,
  });
  return response.data;
};

const createUser = async ({ username, email, password }) => {
  const response = await axios.post("/register/", { username, email, password });
  return (response.status === 200 ? response.data : "error");
};

const userService = { createUser, loginUser };
export default userService;
