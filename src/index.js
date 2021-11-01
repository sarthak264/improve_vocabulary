import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FavProvider } from "./context/FavContext";

ReactDOM.render(
  <React.StrictMode>
    <FavProvider>
      <App />
    </FavProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
