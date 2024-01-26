import React, { useContext } from 'react';
import styles from './dgContinue.module.css'
import { DropdownContext } from '../dgContext';

const ContinueButton = () => {
 const { dropdowns } = useContext(DropdownContext);

 const handleClick = () => {
    console.log(dropdowns)
 };

 return (
    <div className={styles.btn_box}>
        <div className={styles.continue_btn}>
            <div className={styles.icon}><img className={styles.pIcon} src="/icons/pIcon.png" /></div>
            <div className={styles.text} onClick={handleClick} >Continue</div>
        </div>
        <div className={styles.back}>Back</div>
     </div>
 );
};

export default ContinueButton;
