import React from "react";
import "./layout.css";
import "../styles.css";
import HeaderText from "./HeaderText";
import HeaderSearchField from "./HeaderSearchField";
import HeaderProfile from "./HeaderProfile";
const Header = () => {
  return (
    <div className="headerWrapper">
      <HeaderText />
      <HeaderSearchField />
      <HeaderProfile />
    </div>
  );
};

export default Header;
