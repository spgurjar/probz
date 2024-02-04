import styles from "./project.module.css";
import Offer from "../assets/offer/offer";
import Header from "../assets/header/header";
import Footer from "../assets/footer/footer";
import { BiChat } from "react-icons/bi";
import DescBox from "./projectComp/descBox";
import Link from 'next/link';


const Project = () => {
    return(
        <div className={styles.project_body}>
            <div><Offer/></div>
            <div><Header/></div>
            <div className={styles.pr_description_body}>
                <div className={styles.head}>Projects</div>
                <div className={styles.pr_detail_box}>
                    <div className={styles.detail}>
                        <DescBox mainpic="prj1" title="Nike Purchase experience" subtitle="Survey about nike comfort and manufacturing defects" response="Response 25/100" />   
                    </div>
                    <div className={styles.detail}>
                    <DescBox mainpic="prj2" title="Nike Purchase experience" subtitle="Survey about nike comfort and manufacturing defects" response="Response 25/100" />   
                    </div>
                    <div className={styles.detail}>
                    <DescBox mainpic="prj3" title="Nike Purchase experience" subtitle="Survey about nike comfort and manufacturing defects" response="Response 25/100" />   
                    </div>   
                </div>
                <div className={styles.pr_box}>
                <div className={styles.btn_box}>
                    <div className={styles.project_btn}>
                        <div className={styles.icon}><img className={styles.pIcon} src="/icons/pIcon.png" /></div>
                        <Link href="/step1"><div className={styles.text}>New Project</div></Link>
                    </div>
                    <div className={styles.chat_btn}><BiChat className={styles.chatIcon} /></div>
                </div>
            </div>
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Project;