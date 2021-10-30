import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../context/FavContext";
import "./list.css";

const List = () => {
  const { list, setList } = useContext(FavContext);
  console.log(list);
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
