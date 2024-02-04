import styles from "./header.module.css";
import Link from 'next/link';
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleVisibility = () => {
      setIsActive(!isActive);
    };
    return(
        <div className={styles.header_body}>
            <div className={styles.head_iconBg}>
                <img className={styles.icon} src="/icons/probzBg.png"/>
                <div className={styles.head_icon}>Probz</div>
            </div>
            <div className={styles.btn_box}>
                <div className={styles.Btn}>Book A Meeting</div>
            </div>
             {/* ResposiveComponent  */}

         <div className={`${styles.navbar_window} ${isActive ? styles.active : ""}`}>
         <div onClick={toggleVisibility} className={styles.menuIcon}><GiHamburgerMenu/></div>
         <div className={styles.menubar_body}>
         <div className={styles.nav_item}>Pricng</div>
            <div className={styles.nav_item}>How It Works</div>
            <div className={styles.nav_item}>Case Studies</div>
            <div className={styles.nav_item}>Reports</div>
            <div className={styles.nav_item}>Sign Up</div>
            <div className={styles.nav_item}>Book A Meeting</div>
         </div>
        </div>
        </div>

        
    )
}

export default Header;