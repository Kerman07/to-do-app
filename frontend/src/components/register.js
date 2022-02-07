const Register = ({ setRerender }) => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username"></input>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email"></input>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password"></input>
        <button type="submit"></button>
        <a href="/">Already have an account? Login here</a>
      </form>
    </div>
  );
};

export default Register;
