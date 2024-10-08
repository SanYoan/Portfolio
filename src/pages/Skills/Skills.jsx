import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const section = document.getElementById("skills");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Lancer l'animation de chaque barre de progression
            progressBars.forEach((bar) => {
              const maxValue = bar.getAttribute("aria-valuenow");
              bar.style.width = "0%"; // initialiser à 0%

              setTimeout(() => {
                bar.style.width = maxValue + "%"; // animer jusqu'à la valeur de la barre
              }, 100); // délai léger avant l'animation
            });

            // Arrêter l'observation une fois que l'animation est lancée
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // le callback est déclenché quand 50% de la section est visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section); // nettoyer l'observation si le composant est démonté
      }
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>Compétences</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">Adobe Photoshop</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="74"
                        aria-valuemin="10"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h3>74%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">PowerPoint</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="86"
                        aria-valuemin="10"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h3>86%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">Node.Js + Express</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="57"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h3>57%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">API Rest</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="54"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h3>54%</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">HTML 5</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">CSS 3</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h3>85%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">JavaScript</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h3>65%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">React.js</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h3>70%</h3>
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

export default Skills;
