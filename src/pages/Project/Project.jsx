import Projets from "../../components/Projets/Projets"
import ProjetsDatas from "../../datas/projets.json";
import styles from "../../components/Projets/Cards/cards.module.scss";

function Project() {
  return (
    <>
      <div id="projet" className="section-heading text-center">
        <h2 className="title-Projects">Projets</h2>
      </div>
      <section className={styles.container}>

        {ProjetsDatas.map((data) => (
          <Projets datas={data} key={data.id} type="Cards" />
        ))}
      </section>
    </>
  );
}

export default Project;
