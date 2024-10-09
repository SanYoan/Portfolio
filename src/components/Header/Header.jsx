
import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll"; // Importer Link depuis react-scroll

const Header = () => {
  return (
    <header className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="/Portfolio">
                <img src={logo} className="logo_img" alt="logo" />
              </a>
            </div>

            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className=" smooth-menu active"></li>
                <li className="smooth-menu">
                  <Link
                    to="welcome-hero"
                    href="#welcome-hero"
                  >
                    Accueil
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    to="about"
                    href="#about"
                  >
                    Presentation
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    to="education"
                    href="#education"
                  >
                    Études
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    to="skills"
                    href="#skills"
                  >
                    Compétences
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    to="projet"
                    href="#projet"
                  >
                    Projets
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    to="contact"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </header>
  );
};

export default Header;

