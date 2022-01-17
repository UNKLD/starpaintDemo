import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <nav
      className={
        scrolled
          ? "navbar navbar-expand-lg navbar-light bg-light fixed-top pb-3 shadow-lg"
          : "navbar navbar-expand-lg navbar-light bg-light fixed-top pb-3"
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#intro">
          <span className="text-primary fw-bolder h2">
            <i class="bi bi-palette-fill m-3 h4"></i>
            Star Painting
          </span>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#topics">
                About Us
              </a>
              <div classNameName="under"></div>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
