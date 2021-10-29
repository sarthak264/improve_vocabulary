import "./toggle.css";

const Toggle = () => {
  return (
    <div className="toggle_container">
      <input type="checkbox" name="theme" id="theme_input" />
      <label className="label" htmlFor="theme_input">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default Toggle;
