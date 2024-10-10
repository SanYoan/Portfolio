import "./PopupProject.css";
import React, { useEffect } from "react";

const PopupProject = ({ datas, onClose }) => {
    // Ferme la modale si on clique en dehors du contenu (sur l'overlay)
    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            onClose();
        }
    };

    useEffect(() => {
        // Cacher la navbar quand la modal est ouverte
        const navbar = document.querySelector("nav.navbar.bootsnav.navbar-fixed");
        if (navbar) {
            navbar.style.display = "none"; // Cache la navbar quand la modale s'ouvre
        }

        // Ferme la modale si "Escape" est pressé
        const handleEscapeKey = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscapeKey);

        // Nettoie l'événement lors du démontage du composant et réaffiche la navbar
        return () => {
            if (navbar) {
                navbar.style.display = "block"; // Réaffiche la navbar quand la modale se ferme
            }
            window.removeEventListener("keydown", handleEscapeKey);
        };
    }, [onClose]);

    return (
        <div id="overlay" onClick={handleOverlayClick}>
            <div id="popup_message">
                <button className="close-button" onClick={onClose}>✖</button> {/* Bouton pour fermer la modale */}
                <h3>{datas.title}</h3>
                <div className="border-title"></div>
                <div className="content_modal">
                    <div className="section">
                        <div className="img-container">
                            <div className="degrade_imgModal"></div>
                            <img src={datas.pictureone} alt="Capture d'écran site" />
                        </div>
                        <h4>Compétences apprises :</h4>
                        <div className="border-title"></div>
                        <ul>
                            {datas.skills && datas.skills.length > 0 ? (
                                datas.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))
                            ) : (
                                <li>Aucune compétence spécifiée</li>
                            )}
                        </ul>
                    </div>
                    <div className="border-image"></div>
                    <div className="section">
                        <div className="img-container">
                            <div className="degrade_imgModal"></div>
                            <img src={datas.picturetwo} alt="Capture d'écran site" />
                        </div>
                        <h4>Concept du projet :</h4>
                        <div className="border-title"></div>
                        <p>{datas.description}</p>
                    </div>
                </div>
                <div className="border-title"></div>
                <div className="button">
                    <a
                        href={datas.urlsite ? datas.urlsite : '#'}
                        target={datas.urlsite ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={datas.urlsite ? '' : 'hidden'} // Classe conditionnelle
                    >
                        <button className="popup-button" id="yesButton">
                            Visitez le site
                        </button>
                    </a>

                    <a
                        href={datas.github ? datas.github : '#'}
                        target={datas.github ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={datas.github ? '' : 'hidden'} // Classe conditionnelle
                    >
                        <button className="popup-button" id="noButton">
                            Code sur GitHub
                        </button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default PopupProject;
