import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../context/FavContext";
import "./list.css";

const List = () => {
  const { list, setList } = useContext(FavContext);

  const deleteWord = (index) => {
    const toBeList = [...list];
    const removed = toBeList.splice(index, 1);
    setList(toBeList);
    localStorage.setItem("list", JSON.stringify(toBeList));
  };

  useEffect(() => {
    const localList = localStorage.getItem("list");
    if (localList === null) {
      setList([]);
    }
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
            <i
              className="fas fa-trash-alt delete"
              onClick={() => {
                deleteWord(index);
              }}
            ></i>
            <h1>{obj.word}</h1>
            <h2>{obj.definition}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default List;
