import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => setCategory("general")}
        >
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/business"
                className="nav-link"
                onClick={() => setCategory("business")}
              >
                business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/entertainment"
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/health"
                className="nav-link"
                onClick={() => setCategory("health")}
              >
                health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/science"
                className="nav-link"
                onClick={() => setCategory("science")}
              >
                science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sports"
                className="nav-link"
                onClick={() => setCategory("sports")}
              >
                sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/technology"
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
