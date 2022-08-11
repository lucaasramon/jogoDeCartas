import styles from "./Button.module.css"


function Button({text}){
    return <button value="" className={styles.btn}>{text}</button>
}

export default Button