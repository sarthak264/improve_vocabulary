import { createContext, useState } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <FavContext.Provider value={{ list, setList }}>
      {children}
    </FavContext.Provider>
  );
};
