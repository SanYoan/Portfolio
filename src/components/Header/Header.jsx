import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

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
              <Link className="navbar-brand" to="/accueil">
                <img src={logo} className="logo_img" alt="logo" />
              </Link>
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
                <li className="smooth-menu active">
                  <Link to="#accueil">Accueil</Link>
                </li>
                <li className="smooth-menu">
                  <Link to="#about">Presentation</Link>
                </li>
                <li className="smooth-menu">
                  <Link to="#study">Études</Link>
                </li>
                <li className="smooth-menu">
                  <Link to="#competences">Compétences</Link>
                </li>
                <li className="smooth-menu">
                  <Link to="#projet">Projets</Link>
                </li>
                <li className="smooth-menu">
                  <Link to="#contact">Contact</Link>
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
