import styles from "./about.module.css";
import { BsSkipStartFill } from "react-icons/bs";

const About = () => {
    return(
        <div className={styles.about_body}>
            <div className={styles.body_box}>
                <div className={styles.text_box}>
                    <div className={styles.head}>Scaling Quality Feedback with <span className={styles.clr_text}>AI-Power</span></div>
                    <div className={styles.subhead}><span className={styles.clr_text}>Probz.ai</span> ensures a deep understanding of user preferences, offering holistic insights</div>
                    <div className={styles.btn_box}><div className={styles.start_btn}>Start Now</div><img className={styles.start_icon} src="/icons/startIcon.png"/></div>
                </div>
                <div className={styles.img_box}>
                    <div className={styles.img}><img className={styles.abt} src="/images/abt.png"/></div>
                    <div className={styles.bgImg}><img className={styles.abtBg} src="/images/abtBg.png"/></div>
                </div>
            </div>
            <div className={styles.body_box2}>
                <div className={styles.img_box}><img className={styles.abt2} src="/images/abt2.png" /></div>
                <div className={styles.text_box2}>
                    <div className={styles.line1}>Quant, Qual & Video Research</div>
                    <div className={styles.line2}>End-to-End<br></br> AI-Powered Insights</div>
                    <div className={styles.line3}>Knit is an end-to-end Insights Platform combining the power of Quant, Video and AI to help brands get a quicker and more holistic understanding of their target audience. Gather 1000’s of quant, qual & video responses from our panel of over </div>
                    <div className={styles.btn_box2}><div className={styles.get_btn}>Get Benefits Now</div><BsSkipStartFill className={styles.getbtn_icon}/></div>
                </div>
            </div>
        </div>
    )
}

export default About;