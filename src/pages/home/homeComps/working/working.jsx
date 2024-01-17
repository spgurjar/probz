import styles from "./working.module.css";

const Working = () => {
    return(
        <div className={styles.work_body}>
            <div className={styles.head}>How It Works</div>
            <div className={styles.subhead}>Empower your business with informed insights driving smarter decisions</div>
            <div className={styles.btn_box}>
                <div className={styles.btn1}>Create a new project</div>
                <div className={styles.btn2}>Select Demographics</div>
                <div className={styles.btn3}>Submit Survey</div>
            </div>
            <div className={styles.img_box}>
                <img className={styles.work_img} src="/images/working.png" />
            </div>
            <div className={styles.caption1}>Feedback from Ideation to Execution</div>
            <div className={styles.caption2}>Unlocking the synergy of Quantitative, Video, and AI functionalities, Probz accelerates audience insight extraction, delivering actionable analytics to drive seamless and effective decision-making within your business</div>
        </div>
    )
}

export default Working;