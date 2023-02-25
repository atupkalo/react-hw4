import React from "react";

import Nav from "../Nav/Nav";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className={"header"}>
        <div className="header-container">
          <h1 className={"header-title"}>The Star Wars</h1>
          <Nav />
        </div>
      </header>
    );
  }
}
export default Header;
