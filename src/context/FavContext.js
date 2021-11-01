import { createContext, useState } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [theme, setTheme] = useState(false);

  return (
    <FavContext.Provider value={{ list, setList, theme, setTheme }}>
      {children}
    </FavContext.Provider>
  );
};
