
import "./PopupProject.css";
import { useEffect } from "react";

const PopupProject = ({ datas, onClose }) => {
    // Ferme la modale si on clique en dehors du contenu (sur l'overlay)
    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            onClose();
        }
    };



    // Fonction pour obtenir le type d'image en fonction de la taille de l'écran
    const getCurrentImageType = () => {
        const width = window.innerWidth;
        if (width <= 480) return "mobile";
        if (width <= 1024) return "tablet";
        return "desktop";
    };

    // Obtient le type d'image actuel
    const currentImageType = getCurrentImageType();

    useEffect(() => {
        const navbar = document.querySelector("nav.navbar.bootsnav.navbar-fixed");
        if (navbar) {
            navbar.style.display = "none"; // Cache la navbar quand la modale s'ouvre
        }

        const handleEscapeKey = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscapeKey);

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
                <button className="close-button" onClick={onClose}>✖</button>
                <h3>{datas.title}</h3>
                <div className="border-title"></div>
                <div className="content_modal">
                    <div className="section">
                        <div className="img-container">
                            <div className="degrade_imgModal"></div>
                            <img
                                src={`${process.env.PUBLIC_URL}${datas.images[currentImageType].pictureone}`}
                                alt="Capture d'écran site"
                            />
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
                            <img
                                src={`${process.env.PUBLIC_URL}${datas.images[currentImageType].picturetwo}`}
                                alt="Capture d'écran site"
                            />
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
                        className={datas.urlsite ? '' : 'hidden'}
                    >
                        <button className="popup-button" id="yesButton">
                            Visitez le site
                        </button>
                    </a>

                    <a
                        href={datas.github ? datas.github : '#'}
                        target={datas.github ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={datas.github ? '' : 'hidden'}
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

