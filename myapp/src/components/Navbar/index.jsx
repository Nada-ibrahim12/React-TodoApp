import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5 pe-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TO-DO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/welcomePage"
            >
              Home
            </Link>
            <Link className="nav-link" to="/Register">
              Register
            </Link>
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
