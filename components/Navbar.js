import { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function ResponsiveAppbar() {
  useEffect(() => {
    $(document).ready(function () {
      $(".sidenav").sidenav();
    });
  }, []);

  return (
    <div>
      <nav
        style={{
          backgroundColor: "#333",
          padding: "0px 10px",
          position: "fixed",
        }}
      >
        <div className="nav-wrapper">
          <Link href={`/`}>
            <a className="brand-logo">Web Zone</a>
          </Link>

          <a className="sidenav-trigger" data-target="mobile-nav">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down ">
            <Link href={`/`}>
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link href={`/about`}>
              <li>
                <a>About</a>
              </li>
            </Link>
            <Link href={`/contact`}>
              <li>
                <a>Contact</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <ul className="sidenav sidenav-close" id="mobile-nav">
        <h5>Star Painting</h5>

        <Link href={`/`}>
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link href={`/about`}>
          <li>
            <a>About</a>
          </li>
        </Link>
        <Link href={`/contact`}>
          <li>
            <a>Contact</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}
