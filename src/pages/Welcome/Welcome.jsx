import React from "react";
import Slide from "../../components/Slide/Slide";
import H2title from "../../components/typingAnimation/TypingAnimation";
import cvFilePath from "../../../src/assets/download/CV_Sannier_Yoan.pdf";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground.jsx"; // Assurez-vous que le chemin est correct

function Welcome() {
    return (
        <section id="welcome-hero" className="welcome-hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <AnimatedBackground />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="header-text">
                            <p>
                                Bonjour<span>,</span>
                            </p>
                            <H2title />
                            <p></p>
                            <a className="downloadCv" href={cvFilePath} download>
                                Téléchargez CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Slide />
        </section>
    );
}

export default Welcome;
