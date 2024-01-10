import styles from "./tm.module.css";

const Testimonial = () => {
    return(
        <div className={styles.tm_body}>
            <div className={styles.box1}>
                <div className={styles.img_box}>
                    <div className={styles.bgImg}><img className={styles.bg} src="/images/testBg.png"/></div>
                    <div className={styles.Img}><img className={styles.prPic} src="/images/prPic.png"/></div>
                </div>
                <div className={styles.title}>Testimonials</div>
                <div className={styles.subtitle}>Customer who loved Probz</div>
            </div>
            <div className={styles.box2}>
                <div className={styles.name}>Carla James</div>
                <div className={styles.location}>Bangalore,India</div>
                <div className={styles.comment}>Probz streamlined our research remarkably. The AI-generated hypotheses provided insightful directions, and the customizable surveys were a game-changer in our new product launch</div>
            </div>
        </div>
    )
}

export default Testimonial;