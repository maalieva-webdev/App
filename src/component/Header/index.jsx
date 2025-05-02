import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import "./index.css";

// function index() {
function Header() {
  return (
    <div className="nav-bar">
      <Link to="/">Glavnoe</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/works">Works</Link>
      <Link to="/placeholder">Placeholder</Link>
      <Link to="/createProduct">Create</Link>
    </div>
  );
}

// export default index;
export default Header;
