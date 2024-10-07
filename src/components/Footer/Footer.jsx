import logo from "../../assets/logo.png"


import { Link } from "react-router-dom";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <Link to="/accueil" className="navbar-brand"><img src={logo} className="logo_imgFooter" alt="logo" /></Link>
          <p>
            &copy; {currentYear} Yoan Sannier, Tous droits réservés.
          </p>
        </div>
      </div>

      <div id="scroll-Top">
        <div className="return-to-top" onClick={scrollToTop}>
          <i className="fa fa-angle-up" id="scroll-top"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

