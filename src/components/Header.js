import React from "react";
import headerLogo from "../../src/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} />
    </header>
  );
}

export default Header;
