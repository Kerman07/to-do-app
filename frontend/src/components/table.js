import Item from "./item.js";

const Table = ({ items, deleteHandler }) => {
  return (
    <table className="table table-striped">
      <tbody>
        {items.map((item) => (
          <Item key={item.id} item={item} deleteHandler={deleteHandler} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
