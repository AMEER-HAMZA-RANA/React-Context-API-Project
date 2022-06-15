import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import Header from "./Header";
import Main from "./Main";



function App() {
  
  const themeHook = useState("light");
  // const themeHook = "light";
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <p style={{ textAlign: "center" }}>{themeHook} State</p>
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
