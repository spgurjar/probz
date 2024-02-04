import styles from "./experience.module.css";
import Offer from "../assets/offer/offer";
import Header from "./header/header";
import Footer from "../assets/footer/footer";
import QueAnsTemp from "./QueAnsTemp/QueAnsTemp";
import Sidebar from "../sidebar/sidebar";


const Experience = () => {
    return(
        <div className={styles.experience_body}>
            <div><Offer/></div>
            <div className={styles.resHeader}><Header/></div>
            <div className={styles.grid_box}>
                <div className={styles.sb}><Sidebar/></div>
                <div className={styles.content_box}>
                    <div className={styles.eHeader}><Header/></div>
                    <div className={styles.title_box}>
                        <span className={styles.head_que}>Question</span>
                        <p className={styles.subhead_ans}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                    <div><QueAnsTemp
                        question="what do you like most about nike?" 
                        answer="A shoes with perfect fit and comfortable to use all time with all activities and a great design and colour sense on production side" />
                    </div>
                    <div><QueAnsTemp
                        question="what do you like most about nike?" 
                        answer="A shoes with perfect fit and comfortable to use all time with all activities and a great design and colour sense on production side" />
                    </div>
                    <div><QueAnsTemp
                        question="what do you like most about nike?" 
                        answer="A shoes with perfect fit and comfortable to use all time with all activities and a great design and colour sense on production side" />
                    </div>
                    <div><QueAnsTemp
                        question="what do you like most about nike?" 
                        answer="A shoes with perfect fit and comfortable to use all time with all activities and a great design and colour sense on production side" />
                    </div>
                </div>
            </div>
            <div className={styles.eFooter}><Footer/></div>
        </div>
    )
}

export default Experience;