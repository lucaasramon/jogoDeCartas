import Card from "../card/Card";
import styles from "./Main.module.css";

function Main() {
  return (
    <>
      <div className={styles.container_cards}>
        <Card />
      </div>
      <div>
      <button value="" className={styles.btn}>Puxar carta</button>
      <button value="" className={styles.btn}>Embaralhar</button>
      </div>
    </>
  );
}

export default Main;
