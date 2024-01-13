import styles from './step1.module.css';
import { useState } from 'react';
import UcBox from './ucBox/ucBox';
import { GoLightBulb } from "react-icons/go";
import Offer from "../assets/offer/offer";
import Header from "../assets/header/header";
import Footer from "../assets/footer/footer";

const Step1 = () => {
    const [projectName, setProjectName] = useState("Name of the project")
    const [industry, setIndustry] = useState("Describe the insights you are looking to capture")
    return(
        <div className={styles.step1_body}>
            <div><Offer/></div>
            <div><Header/></div>
            <div className={styles.head_box}>
                <div className={styles.header}>
                    <div className={styles.title}>Start New Project</div>
                    <div className={styles.step_box}>
                        <div className={styles.step}>Step 1</div>
                        <div className={styles.step}>Step 2</div>
                        <div className={styles.step}>Step 3</div>
                    </div>
                </div>
                <div className={styles.colmTitle}>Project Name</div>
                <input className={styles.credInput} type="text" value={projectName}  onChange={(e)=>{setProjectName(e.target.value)}} />

                <div className={styles.colmTitle}>Industry</div>
                <textarea className={styles.credInput} type="text" value={industry} onChange={(e)=>{setIndustry(e.target.value)}} />

                <div className={styles.colmTitle}>Select the use case</div>
                <div className={styles.slct_box}>
                    <div className={styles.slct}><UcBox title="Survey Feedback" subtitle="In oder to for aI to support your project’s goals. choose the use case that best suits your project" /></div>
                    <div className={styles.slct}><UcBox title="Survey Feedback" subtitle="In oder to for aI to support your project’s goals. choose the use case that best suits your project" /></div>
                    <div className={styles.slct}><UcBox title="Survey Feedback" subtitle="In oder to for aI to support your project’s goals. choose the use case that best suits your project" /></div>
                </div>

                <div className={styles.note}><GoLightBulb className={styles.bulb} />In oder to for aI to support your project’s goals. choose the use case that best suits your project</div>
            </div>
            <div className={styles.pr_box}>
                <div className={styles.btn_box}>
                    <div className={styles.back}>Back</div>
                    <div className={styles.project_btn}>
                        <div className={styles.icon}><img className={styles.pIcon} src="/icons/pIcon.png" /></div>
                        <div className={styles.text}>New Project</div>
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Step1;