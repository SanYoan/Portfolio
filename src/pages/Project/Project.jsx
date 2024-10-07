import p1 from "../../assets/portfolio/p1.jpg";
import p2 from "../../assets/portfolio/p2.jpg";
import p3 from "../../assets/portfolio/p3.jpg";
import p4 from "../../assets/portfolio/p4.jpg";
import p5 from "../../assets/portfolio/p5.jpg";

function Project() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-details">
        <div className="section-heading text-center">
          <h2>Projets</h2>
        </div>
        <div className="container">
          <div className="portfolio-content">
            <div className="isotope">
              <div className="row">
                <div className="col-sm-4">
                  <div className="item">
                    <img src={p1} alt="Portfolio image1" />
                    <div className="isotope-overlay">
                      <a href="#">UI/UX Design</a>
                    </div>
                  </div>
                  <div className="item">
                    <img src={p2} alt="Portfolio image2" />
                    <div className="isotope-overlay">
                      <a href="#">UI/UX Design</a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="item">
                    <img src={p3} alt="Portfolio image3" />
                    <div className="isotope-overlay">
                      <a href="#">Web Design</a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="item">
                    <img src={p4} alt="Portfolio image4" />
                    <div className="isotope-overlay">
                      <a href="#">Web Development</a>
                    </div>
                  </div>
                  <div className="item">
                    <img src={p5} alt="Portfolio image5" />
                    <div className="isotope-overlay">
                      <a href="#">Web Development</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
