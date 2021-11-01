import { useContext, useEffect } from "react";
import { FavContext } from "../../context/FavContext";
import "./toggle.css";

const Toggle = () => {
  const { theme, setTheme } = useContext(FavContext);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className="toggle_container">
      <input
        type="checkbox"
        name="theme"
        id="theme_input"
        onClick={() => setTheme(!theme)}
      />
      <label className="label" htmlFor="theme_input">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default Toggle;
