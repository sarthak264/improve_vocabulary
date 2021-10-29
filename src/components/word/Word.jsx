import React, { useState } from "react";
import "./word.css";

const Word = () => {
  const [word, setWord] = useState("Loading...");
  const [meaning, setMeaning] = useState("Meaning would appear here");

  return (
    <div className="word_container">
      <h1 className="word">{word}</h1>
      <h2 className="definition">{meaning}</h2>
    </div>
  );
};

export default Word;
