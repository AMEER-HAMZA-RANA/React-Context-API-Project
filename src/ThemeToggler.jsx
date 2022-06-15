import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const themeTogglerStyle = {
  cursor: "pointer",
};

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      style={themeTogglerStyle}
      onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
    >
      <span title="Switch Theme" style={{ fontSize: "60px" }}>
        {themeMode === "light" ? "🌙" : "☀️"}
        {/* <p style={{fontSize:"20px", textAlign:"center"}}>{themeMode}</p> */}
      </span>
    </div>
  );
};

export default ThemeToggler;
