import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to Rest Countries</h1>
      <nav className="nav">
        <a href="/home">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact-us">Contact US</a>
      </nav>
    </div>
  );
};

export default Header;
