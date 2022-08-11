import Button from "./Button";
import styles from "./FooterButtons.module.css"

function FooterButtons(){
    return(
        <div className={styles.container}>
            <Button text="Puxar carta"/>
            <Button text="Embaralhar" />
        </div>
    )
}

export default FooterButtons