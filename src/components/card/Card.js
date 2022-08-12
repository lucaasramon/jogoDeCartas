import styles from "./Card.module.css";
import React, { useEffect, useState } from "react";
function Card() {
  const [allDogs, setAllDogs] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "51eb58cc-aaf6-4be5-972f-2b500e651299",
      },
    };
    async function get() {
      let teste = 5;
      await fetch(`https://api.thedogapi.com/v1/breeds?limit=${teste}`, options)
        .then((data) => data.json())
        .then((update) => setAllDogs(update))
        .catch((e) => console.log(e));

      console.log("Deu certo", allDogs[0]);
    }
    get();
  }, [allDogs]);

  return (
    <>
      <div></div>
      {allDogs.map((data) => (
        <div className={styles.card}>
          <p className={styles.pontos}>Pts: 9</p>
          <p>{data.name}</p>
          <img className={styles.img_cachorro} src={data.image.url} alt="" />
          <p className={styles.descricao}>{data.temperament}</p>
        </div>
      ))}
    </>
  );
}

export default Card;
