import React, { useState } from "react";
import styles from "./faqComp.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const FaqComp = ({data}) => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleToggle = (index) => {
        setClickedIndex(clickedIndex === index ? null : index);
    }

    return(
        <div className={styles.comp_body}>
            {data.map((item, index) => (
                <div key={index} className={styles.faq_items}>
                    <div className={styles.que_box} onClick={() => handleToggle(index)} >
                        <div className={styles.que}><span className={styles.icon}>{clickedIndex===index ? <FaArrowUp/> : <FaArrowDown/>}</span>{item.question}</div>
                        <div className={styles.subtitle}>Short Answer to the question...</div>
                    </div>
                    {clickedIndex==index && <div className={styles.ans}>{item.answer}</div> }
                </div>
            ))}
        </div>       
    );
};

export default FaqComp;