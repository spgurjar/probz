import styles from "./ucBox.module.css";

const UcBox = (props) => {
    return(
        <div className={styles.box_body}>
            <div className={styles.icon}><img className={styles.feed} src="/icons/feed.png" /></div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.subtitle}>{props.subtitle}</div>
        </div>
    )
}

export default UcBox;