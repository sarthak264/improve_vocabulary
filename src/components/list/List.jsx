import { Link } from "react-router-dom";
import "./list.css";

const List = () => {
  return (
    <div className="list_container">
      <Link to="/">
        <button className="home_btn">
          <i className="fas fa-home"></i>
        </button>
      </Link>
      <h1 className="title">List</h1>
    </div>
  );
};

export default List;
