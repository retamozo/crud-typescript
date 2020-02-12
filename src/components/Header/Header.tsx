import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hi! <strong> NOMBRE </strong>{" "}
      </p>
      <nav className="nav-principal">
        <a href="#!">Logout</a>
      </nav>
    </header>
  );
};

export default Header;
