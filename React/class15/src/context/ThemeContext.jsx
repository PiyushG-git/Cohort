import React, { useState } from "react";
import { ThemeDataContext } from "./ThemeDataContext";

const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeDataContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;
