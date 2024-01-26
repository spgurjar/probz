"use client";
import React, { useContext, useState, useEffect } from 'react';
import styles from "./dgTemp.module.css";
import { PiCheckCircle } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";
import { DropdownContext } from './dgContext';

const Dgtemp = ({ name, options }) => {
 const { dropdowns, setDropdowns, openDropdown, setOpenDropdown } = useContext(DropdownContext);
 const [clicked, setClicked] = useState(false)
 const menu_head = {
  "location" : "cities",
  'houseHoldIncome': 'Income',
  'profession' : 'Profession',
  'age': 'Age',
  'gender': 'Gender',
  'interest': 'Interests',
 }
 const handleCheckboxChange = (event, option) => {
    setDropdowns((prev) => {
      
        if (!prev[name].some((item) => item.name === option)) {
            return {
                ...prev,
                [name]: [...prev[name], { name: option, percentage: 20, clicked: !clicked }],
                
            };
        } else {
            return {
                ...prev,
                [name]: prev[name].filter((item) => item.name !== option, ), clicked: !clicked ,
            };
        }
    });
    setClicked(false);
};

const handleIncrease = (option) => {
    setDropdowns((prev) => ({
        ...prev,
        [name]: prev[name].map((item) =>
            item.name === option ? { ...item, percentage: Math.min(100, item.percentage + 10) } : item
        ),
    }));
};

const handleDecrease = (option) => {
    setDropdowns((prev) => ({
        ...prev,
        [name]: prev[name].map((item) =>
            item.name === option ? { ...item, percentage: Math.max(0, item.percentage - 10)} : item
        ),
    }));
    
};
return (
    <div className={styles.dropdown_body}>
      
      
      <div className={styles.menu_holder}>
      <div className={styles.menu_head}>{menu_head[name]} </div>
       <div className={styles.dd_menu} >
           {options.map((option) => (
            <div key={option} className={styles.res_options}>
              <div className={styles.option_box}>
                <div 
                  className={styles.customCheckbox}
                  onClick={(event) => handleCheckboxChange(event, option)}
                >
                  {dropdowns[name].find((item) => item.name === option)?.clicked ? 
                  <PiCheckCircleFill className={styles.notclicked} /> : 
                  <PiCheckCircle className={styles.clicked} />}
                </div> 
                <div className={styles.opt_name}><label htmlFor={`option_${option}`}>{option}</label></div> 
              </div>
               <div className={styles.percentage_box}>
                 <div className={styles.plus_btn} onClick={() => handleIncrease(option)}>+</div>
                 <div className={styles.percent}>{(dropdowns[name].find((item) => item.name === option)?.percentage || 0)}%</div>
                 <div className={styles.minus_btn} onClick={() => handleDecrease(option)}>-</div>
               </div>
            </div>
           ))}
        </div>  
      </div>
    </div>
 );
};

export default Dgtemp;
