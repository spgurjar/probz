import styles from "./temp.module.css";

const Temp = (props) => {
    return(
        <div className={styles.temp_body}>
            <div className={styles.line1}>Content Topic</div>
            <div className={styles.line2}>{props.line2}</div>
            <div className={styles.line3}>{props.line3}</div>
            <div className={styles.img_box}>
                <div className={styles.bgImg}><img className={styles.bg} src={`/images/${props.bgImg}.png`}/></div>
                <div className={styles.img}><img className={styles.pic} src={`/images/${props.img}.png`}/></div>
            </div>
        </div>
    )
}
export default Temp;