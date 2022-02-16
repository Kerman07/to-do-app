import Table from "./table.js";
import { Redirect } from "react-router-dom";
import NewTodo from "./newTodo.js";

const Home = ({ setRerender }) => {
  return (
    <>
      {localStorage.getItem("REACT_TOKEN_AUTH") ? (
        <div>
          <div
            className="navbar"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Welcome {localStorage.getItem("LOGGED_USER")},</div>
            <button
              className="btn btn-sm btn-link"
              onClick={() => {
                localStorage.removeItem("REACT_TOKEN_AUTH");
                localStorage.removeItem("LOGGED_USER");
                setRerender("c");
              }}
            >
              Logout
            </button>
          </div>
          

          <NewTodo setRerender={setRerender} />
          <Table setRerender={setRerender} />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Home;
