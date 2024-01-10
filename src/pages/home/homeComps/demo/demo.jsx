import styles from "./demo.module.css";
import { BsSkipStartFill } from "react-icons/bs";
import Temp from "./demoTemp/temp";

const Demo = () => {
    return(
        <div className={styles.demo_body}>
            <div className={styles.demo_head}>
                <div className={styles.line1}>Supercharge <span className={styles.clr_text}>Your Decision</span> Making Process</div>
                <div className={styles.line2}>From idea to action, gather user feedback instantly, access on-demand insights, and test how users perceive your ideas in real-time.</div>
                <div className={styles.btn_box2}><div className={styles.get_btn}>Get Demo Now</div><BsSkipStartFill className={styles.getbtn_icon}/></div>
            </div>
            <div className={styles.rect_container}>
                <div>
                    <Temp line2="Product Development"
                          line3="Uncover the invaluable insights from users during beta testing and unveil their preferences for features in a captivating manner"
                          bgImg="bg1"
                          img="img1"
                    />      
                </div>
                <div>
                    <Temp line2="Marketing"
                          line3="Delve into market research, scrutinize campaign effectiveness, and dissect customer preferences with precision."
                          bgImg="bg2"
                          img="img2"
                    />      
                </div>
            </div>
            <div className={styles.rect_container}>
                <div>
                    <Temp line2="Design and Branding"
                          line3="Gather user feedback on designs and polish user interfaces to perfection"
                          bgImg="bg3"
                          img="img3"
                    />      
                </div>
                <div>
                    <Temp line2="New Initiatives"
                          line3="Thoroughly authenticate innovative business concepts while astutely gauging market demand."
                          bgImg="bg4"
                          img="img4"
                    />      
                </div>
            </div>
            <div className={styles.rect_container}>
                <div>
                    <Temp line2="Pricing Strategy"
                          line3="Evaluate customer readiness to pay and fine-tune pricing strategies for optimal results."
                          bgImg="bg5"
                          img="img5"
                    />      
                </div>
                <div>
                    <Temp line2="Customer Support"
                          line3="Collect insights on support experiences to enhance and elevate service quality."
                          bgImg="bg6"
                          img="img6"
                    />      
                </div>
            </div>
        </div>
    )
}

export default Demo;