import styles from "./working.module.css";
import Offer from "../assets/offer/offer";
import Header from "../assets/header/header";
import { BiChat } from "react-icons/bi";
import Footer from "../assets/footer/footer";
import Link from 'next/link';

const Working = () => {
    return(
        <div className={styles.work_body}>
            <div><Offer/></div>
            <div><Header/></div>

            <div className={styles.head}>How It Works</div>
            <div className={styles.subhead}>Empower your business with informed insights driving smarter decisions</div>
            <div className={styles.btn_box1}>
                <div className={styles.btn}>Create a new project</div>
                <div className={styles.btn}>Select Demographics</div>
                <div className={styles.btn}>Submit Survey</div>
            </div>
            <div className={styles.img_box}>
                <img className={styles.work_img} src="/images/working.png" />
            </div>
            <div className={styles.caption1}>Feedback from Ideation to Execution</div>
            <div className={styles.caption2}>Never run out of content ideas to write on with trending AI based topic recommendations for your business.Never run out of content ideas to write on with trending AI based topic recommendations for your business.Never run out of content ideas to write on with trending AI based topic recommendations for your business.</div>

            <div className={styles.pr_box}>
                <div className={styles.btn_box}>
                    <div className={styles.project_btn}>
                        <div className={styles.icon}><img className={styles.pIcon} src="/icons/pIcon.png" /></div>
                        <Link href="/project"><div className={styles.text}>New Project</div></Link>
                    </div>
                    <div className={styles.chat_btn}><BiChat className={styles.chatIcon} /></div>
                </div>
            </div>
            <div><Footer/></div>

        </div>
    )
}

export default Working;