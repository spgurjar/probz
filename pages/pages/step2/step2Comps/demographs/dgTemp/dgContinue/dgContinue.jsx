import React, { useContext } from 'react';
import styles from './dgContinue.module.css'
import { DropdownContext } from '../dgContext';
import Link from 'next/link';

const ContinueButton = () => {
 const { dropdowns } = useContext(DropdownContext);

 const handleClick = () => {
    console.log(dropdowns)
 };

 return (
    <div className={styles.btn_box}>
        <div className={styles.continue_btn}>
            <div className={styles.icon}><img className={styles.pIcon} src="/icons/pIcon.png" /></div>
            <Link href="/step3"><div className={styles.text} onClick={handleClick} >Continue</div></Link>
        </div>
            <Link href="/step2"><div className={styles.back}>Back</div></Link>
     </div>
 );
};

export default ContinueButton;
