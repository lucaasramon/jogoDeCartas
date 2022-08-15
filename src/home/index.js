import styles from "./home.module.css";
import React, { useEffect, useState } from "react";
import Usuario from "../assets/usuario.png"
import "../login/login.css";

function Card() {
  const [allDogs, setAllDogs] = useState([]);
  var [count, setCount] = useState(5);
  var [condicao, setCondicao] = useState(false);

  if (count >= 8) {
    count = 8;
  }

  function embaralhar(res) {
    for (
      var j, x, i = res.length;
      i;
      j = Math.floor(Math.random() * i),
        x = res[--i],
        res[i] = res[j],
        res[j] = x
    );

    setCondicao(!condicao);
    return res;
  }

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "51eb58cc-aaf6-4be5-972f-2b500e651299",
      },
    };

    async function get() {
      if (condicao) {
        setAllDogs(allDogs);
      } else {
        await fetch(
          `https://api.thedogapi.com/v1/breeds?limit=${count}`,
          options
        )
          .then((data) => data.json())
          .then((update) => setAllDogs(update))
          .catch((e) => console.log(e));
      }
    }
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <div className={styles.body}> 
      <div className={styles.container}>
             <img src={Usuario} alt="" />
             <p>{localStorage.getItem("name")}</p>
        </div>
        <div className={styles.container_cards}>
          {allDogs.map((data) => (
            <div className={styles.card}>
              <p id="pts" className={styles.pontos}>
               <strong>Pts: {data.id}</strong> 
              </p>
              <p>{data.name}</p>
              <img
                id="img_cachorro"
                className={styles.img_cachorro}
                src={data.image.url}
                alt=""
              />
              <p id="descricao" className={styles.descricao}>
               <strong>Descrição:</strong> 
               <br/>
               <br/>
                {data.temperament}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.groupBtn}>
          <input
            onClick={() => setCount(count + 1, setCondicao(false))}
            className='fadeIn fourth'
            type='submit'
            value="Puxar carta"
          />
            
          <input onClick={() => embaralhar(allDogs)}
          className='fadeIn fourth'
          type='button'
          value="Embaralhar"
          />
            
        </div>
      </div>
    </>
  );
}

export default Card;
