import Table from "./table.js";

const Home = ({ setRerender, items, deleteHandler }) => {
  return (
    <div>
      <button
        style={{ float: "right" }}
        className="btn btn-warning"
        onClick={() => {
          localStorage.removeItem("REACT_TOKEN_AUTH");
          setRerender("c");
        }}
      >
        log out
      </button>
      <Table items={items} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Home;
