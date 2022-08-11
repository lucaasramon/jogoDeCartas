import Card from "../card/Card"
import styles from "./Main.module.css"


function Main(){
    return(
        <div className={styles.container_cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    )
}

export default Main