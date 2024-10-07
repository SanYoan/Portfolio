function Skills() {
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
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="Adobe Photoshop proficiency 74%"
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
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="PowerPoint proficiency 86%"
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
                        aria-label="Node.js and Express proficiency 57%"
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
                        aria-label="API Rest proficiency 54%"
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
                        aria-label="HTML 5 proficiency 90%"
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
                        aria-label="CSS 3 proficiency 85%"
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
                        aria-label="JavaScript proficiency 65%"
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
                        aria-label="React.js proficiency 70%"
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
