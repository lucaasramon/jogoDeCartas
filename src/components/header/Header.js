import styles from "./Header.module.css"
import Usuario from "../../images/usuario.png"

function Header(){
    return(
        <div className={styles.container}>
             <img src={Usuario} alt="" />
             <p>Lucas Ramon</p>
        </div>
    )
}

export default Header