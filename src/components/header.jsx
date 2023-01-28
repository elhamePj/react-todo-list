import React from "react";
import { BiAdjust } from "react-icons/bi";

import { ThemeContext } from "../context/themeContext";

const Header = () => {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);

  return (
    <div className="headerContainer">
      {" "}
      <header className={toggle ? "header darkHeader" : "header"}>
        <button
          className={toggle ? "themeBtn darkThemeBtn" : "themeBtn"}
          onClick={toggleFunction}
        >
          <BiAdjust />
        </button>
        <h1 style={{ margin: 0 }}>ToDo App in React</h1>
      </header>
    </div>
  );
};

export default Header;
