import styles from "./descBox.module.css";

const DescBox = (props) => {
    return(
        <div className={styles.pr_body}>

            <div className={styles.pr_upper}>
                <div className={styles.img_box}>
                    <img className={styles.main_pic} src= {`/images/${props.mainpic}.png`} alt="" />
                </div>
            </div>
            
            <div className={styles.pr_lower}>
                <div className={styles.title}>{props.title} </div>
                <div className={styles.subtitle}>{props.subtitle}</div>
                <div className={styles.resp}>{props.response}</div>
            </div>
        </div>         
    )
}

export default DescBox;