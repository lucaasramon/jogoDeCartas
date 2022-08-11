import styles from "./Card.module.css"

import Golden from "../../images/golden.png"
function Card(){
    return(
        
            <div className={styles.card}>
                <p className={styles.pontos}>Pts: 9</p>
                <p>Golden Retriever</p>
                <img className={styles.img_cachorro} src={Golden} alt="" />
                <p className={styles.descricao}>Descrição: O golden retriever é uma raça canina do tipo retriever originária da Grã-bretanha, e foi desenvolvida para a caça de aves aquáticas.</p>

        </div>
    )
}

export default Card