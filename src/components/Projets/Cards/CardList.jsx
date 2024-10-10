import { useState } from "react";
import styles from "../Cards/cards.module.scss";
import PopupProject from "../PopupProject/PopupProject";

const CardList = ({ datas }) => {
  // État pour contrôler l'ouverture du popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fonction pour fermer le popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <button className={styles.container__card} onClick={() => setIsPopupOpen(true)}>
        <h2 className={styles.card__title}>{datas.title}</h2>
        <div className={styles.degrade_img}></div>
        <img className={styles.card__img} src={datas.cover} alt={datas.title} />
      </button>

      {/* Si isPopupOpen est true, on affiche le PopupProject */}
      {isPopupOpen && <PopupProject datas={datas} onClose={handleClosePopup} />}
    </>
  );
};

export default CardList;
