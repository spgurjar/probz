import React from "react";
import styles from "./footer.module.css"

const Footer = () => {
    return(
        <div className={styles.footer_body}>
           <img className={styles.footerBgImg} src="/images/footerBg.png"/>
            <div className={styles.overlay}>
                <div className={styles.f_content_box}>
                    <div className={styles.intro_box}>
                        <div className={styles.intro_head}>Probz</div>
                        <div className={styles.intro_subhead}>makes marketing easy so you can build your business core.</div>
                    </div>
                    <div className={styles.col_box}>
                        <div className={styles.col}>
                            <div className={styles.col_head}>Connect</div>
                            <div className={styles.col_item}>Book a meeting</div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.col_head}>Company</div>
                            <div className={styles.col_item}>About</div>
                            <div className={styles.col_item}>Blog</div>
                            <div className={styles.col_item}>Pricing</div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.col_head}>Support</div>
                            <div className={styles.col_item}>Cookie policy</div>
                            <div className={styles.col_item}>Privacy policy</div>
                            <div className={styles.col_item}>Terms & condition</div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>Copyright © 2023 SpeedyBrand. All Rights Reserved. Terms of Service, Privacy Policy and Cookie Policy apply.</div>
            </div>
        </div>
    )
}

export default Footer;