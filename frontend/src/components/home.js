import Table from "./table.js";
import { Redirect } from "react-router-dom";
import NewTodo from "./newTodo.js";

const Home = ({ setRerender, items, deleteHandler }) => {
  return (
    <>
      {localStorage.getItem("REACT_TOKEN_AUTH") ? (
        <div>
          <button
            style={{ float: "right", margin: 10 }}
            className="nav-link btn btn-danger"
            onClick={() => {
              localStorage.removeItem("REACT_TOKEN_AUTH");
              localStorage.removeItem("LOGGED_USER");
              setRerender("c");
            }}
          >
            Logout
          </button>
          <NewTodo />
          <Table items={items} deleteHandler={deleteHandler} />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Home;
