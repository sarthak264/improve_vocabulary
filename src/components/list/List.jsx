import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../context/FavContext";
import "./list.css";

const List = () => {
  const { list, setList } = useContext(FavContext);

  useEffect(() => {
    const localList = localStorage.getItem("list");
    const parsedList = JSON.parse(localList);
    setList(parsedList);
  }, []);

  return (
    <div className="list_container">
      <Link to="/">
        <button className="home_btn">
          <i className="fas fa-home"></i>
        </button>
      </Link>
      <h1 className="title">List</h1>
      {list.map((obj, index) => {
        return (
          <div className="card" key={index}>
            <h1>{obj.word}</h1>
            <h2>{obj.definition}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default List;
