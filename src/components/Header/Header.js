import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        Welcome All. <br /> You're watching Header Component
      </h1>
      <nav>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Blog</a>
      </nav>
    </div>
  );
};

export default Header;
