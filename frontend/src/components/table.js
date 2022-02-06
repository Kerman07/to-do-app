import Item from "./item.js";

const Table = ({ items, deleteHandler }) => {
  return (
    <table>
      <tbody className="table table-striped">
        {items.map((item) => (
          <Item key={item.id} item={item} deleteHandler={deleteHandler} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
