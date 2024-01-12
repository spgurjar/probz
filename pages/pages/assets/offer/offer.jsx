import React from "react";
import styles from "./offer.module.css";
import { deflate } from "zlib";
import { off } from "process";

const Offer = () => {
    return(
        <div className={styles.offer_body}>
            <div className={styles.offer_content}>
                <span className={styles.boldtxt}>Limited Time. <span className={styles.txt}>Black friday sale 30% off, Apply <span className={styles.boldtxt}> BLACKFRIDAY30</span> on checkout</span></span>
                <div className={styles.get_btn}>Get Now <img className={styles.ofIcon} src="/icons/offerIcon.png" /></div>
            </div>
        </div>
    )
}

export default Offer;
