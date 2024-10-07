import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div id="contactText" className="section-heading text-center">
        <h2>Contactez-moi</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <ContactForm /> {/* Utilisez le composant ContactForm ici */}
            </div>
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-adress">
                  <div className="contact-add-head">
                    <h3>Yoan Sannier</h3>
                    <p>Développeur Web</p>
                  </div>
                  <div className="contact-add-info">
                    <div className="single-contact-add-info">
                      <h3>Téléphone</h3>
                      <p>07.70.34.97.18</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>Email</h3>
                      <p>yoan.sannier@gmail.com</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>LinkedIn</h3>
                      <a
                        id="linkDetail"
                        href="https://www.linkedin.com/in/yoan-sannier-4367211b9/"
                      >
                        https://www.linkedin.com/in/yoan-sannier-4367211b9/
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hm-foot-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
