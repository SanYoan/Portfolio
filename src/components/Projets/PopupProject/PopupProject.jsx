import "./PopupProject.css";

const PopupProject = ({ datas, onClose }) => {
    return (
        <div id="overlay">
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
                            {/* Ajout d'une vérification pour éviter une erreur si `skills` est indéfini */}
                            {datas.skills && datas.skills.length > 0 ? (
                                datas.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li> // Affiche les compétences apprises
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
                    <a href={datas.urlsite} target="_blank" rel="noopener noreferrer">
                        <button className="popup-button" id="yesButton">
                            Visitez le site
                        </button>
                    </a>
                    <a href={datas.github} target="_blank" rel="noopener noreferrer">
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
