import { useContext, useEffect, useRef } from "react";
import { FavContext } from "../../context/FavContext";
import "./toggle.css";

const Toggle = () => {
  const checkbox = useRef();
  const { theme, setTheme } = useContext(FavContext);

  const getLocalTheme = () => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === null) {
      return;
    } else if (localTheme === "true") {
      setTheme(true);
      checkbox.current.checked = true;
    }
  };

  useEffect(() => {
    getLocalTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="toggle_container">
      <input
        type="checkbox"
        name="theme"
        id="theme_input"
        ref={checkbox}
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
