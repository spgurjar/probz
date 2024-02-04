import styles from "./qualitative.module.css";
import Offer from "../assets/offer/offer";
import Header from "./header/header";
import Footer from "../assets/footer/footer";
import VdoBox from "./vdoBox/vdoBox";
import Sidebar from "../sidebar/sidebar";


const Qualitative = () => {
    return(
        <div className={styles.qualitative_body}>
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
                    <div><VdoBox videoNumber="Video 1" que=" (what do you like most about nike?)" vdoCount="30 Videos" /></div>
                    <div><VdoBox videoNumber="Video 2" que=" (what do you like most about nike?)" vdoCount="30 Videos" /></div>
                </div>
            </div>
            <div className={styles.eFooter}><Footer/></div>
        </div>
    )
}

export default Qualitative;