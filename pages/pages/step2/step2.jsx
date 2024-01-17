import styles from './step2.module.css';
import { useState } from 'react';
// import UcBox from './ucBox/ucBox';
// import { GoLightBulb } from "react-icons/go";
import Offer from "../assets/offer/offer";
import Header from "../assets/header/header";
import Footer from "../assets/footer/footer";

const Step1 = () => {
    const [projectName, setProjectName] = useState("Name of the project")
    const [industry, setIndustry] = useState("Describe the insights you are looking to capture")
    return(
        <div className={styles.step2_body}>
            <div><Offer/></div>
            <div><Header/></div>
            <div className={styles.head_box}>
                <div className={styles.header}>
                    <div className={styles.title}>Pick your Audience</div>
                    <div className={styles.step_box}>
                        <div className={styles.step}>Step 1</div>
                        <div className={styles.step}>Step 2</div>
                        <div className={styles.step}>Step 3</div>
                    </div>
                </div>
                <div className={styles.colmTitle}>Type of responses</div>
            </div>
            <div className={styles.btn_box}>
                <div className={styles.continue_btn}>
                    <div className={styles.icon}><img className={styles.pIcon} src="/icons/pIcon.png" /></div>
                    <div className={styles.text}>Continue</div>
                </div>
                <div className={styles.back}>Back</div>
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Step1;