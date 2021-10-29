import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./word.css";

const Word = () => {
  const [word, setWord] = useState("...");
  const [meaning, setMeaning] = useState("");

  const getWord = async () => {
    const response = await fetch("https://random-words-api.vercel.app/word");
    const json = await response.json();
    const data = json[0];

    setWord(data.word);
    setMeaning(data.definition);
  };

  useEffect(() => {
    getWord();
  }, []);

  return (
    <>
      <Link to="/list">
        <button className="my_list">My List</button>
      </Link>
      <div className="word_container">
        <h1 className="word">{word}</h1>
        <h2 className="definition">{meaning}</h2>
        <button className="fav_btn">Add to favorites</button>
        <i
          className="fas fa-sync-alt refresh"
          onClick={(e) => {
            setWord("...");
            setMeaning("");
            getWord();
            e.target.classList.toggle("rotate");
            setTimeout(() => {
              e.target.classList.toggle("rotate");
            }, 450);
          }}
        ></i>
      </div>
    </>
  );
};

export default Word;
