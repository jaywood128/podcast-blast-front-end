import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function NavBar () {
  return (
    <nav>
    <Link className="navbar navbar-expand-lg navbar-dark bg-dark" to="/signup">
      Sign up
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </nav>
  );
}
export default NavBar;