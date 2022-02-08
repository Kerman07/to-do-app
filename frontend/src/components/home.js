import Table from "./table.js";

const Home = ({ setRerender, items, deleteHandler }) => {
  return (
    <div>
      <button
        style={{ float: "right", margin: 10 }}
        className="nav-link btn btn-danger"
        onClick={() => {
          localStorage.removeItem("REACT_TOKEN_AUTH");
          setRerender("c");
        }}
      >
        Logout
      </button>
      <Table items={items} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Home;
