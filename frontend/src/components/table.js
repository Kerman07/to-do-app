import { useSelector } from "react-redux";
import Item from "./item.js";

const Table = ({ setRerender }) => {
  const items = useSelector((state) => state.todos);

  return (
    <table className="table table-striped">
      <tbody>
        {items.map((item) => (
          <Item key={item.id} item={item} setRerender={setRerender} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
