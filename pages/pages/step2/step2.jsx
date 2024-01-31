import React, { useContext } from 'react';
import styles from './step2.module.css';
import { MdKeyboardArrowDown, MdKeyboardArrowRight} from "react-icons/md";
import { useState } from 'react';
// import UcBox from './ucBox/ucBox';
// import { GoLightBulb } from "react-icons/go";
import Offer from "../assets/offer/offer";
import Header from "../assets/header/header";
import Footer from "../assets/footer/footer";
import Dropdown from './step2Comps/dropdown/dropdown';
import {DropdownProvider, DropdownContext} from "./step2Comps/demographs/dgTemp/dgContext"
import Dgtemp from './step2Comps/demographs/dgTemp/dgTemp';
import ContinueButton from './step2Comps/demographs/dgTemp/dgContinue/dgContinue';

const Step2 = () => {
    const [selectedDropdown, setSelectedDropdown] = useState({
        name: "location",
        options: ['Banglore', 'Indore', 'Pune', 'Mumbai', 'Delhi', 'Roorkee', 'Chennai', 'Kochin']
    });
    const [isOpen, setIsOpen] = useState(true);
    const handleDropdownSelect = (name, options) => {
        if (name === "location") {
            setIsOpen(true);
        } else {
            
            if (selectedDropdown.name && selectedDropdown.name !== name) {
                setIsOpen(false);
            }
    
           
            setIsOpen(true);
        }
    
        setSelectedDropdown({ name, options });
    };

    return(
        <DropdownProvider>
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
                <div><Dropdown/></div>
                <div className={styles.colmTitle}>DemoGraphics</div>
                <div className={styles.dg_box}>
                    <div className={styles.dg_left}>
                        <div className={styles.dd_btn}>
                            <div 
                                onClick={() => handleDropdownSelect("location", ['Banglore', 'Indore', 'Pune', 'Mumbai', 'Delhi', 'Roorkee', 'Chennai', 'Kochin'])}  
                                className={styles.selectButton}>
                                    Location 
                                <span className={styles.icon}>{isOpen && selectedDropdown.name === "location" ? <MdKeyboardArrowRight className={styles.arwIcon}/> :<MdKeyboardArrowDown className={styles.arwIcon}/>}</span>
                            </div>
                            <div 
                                onClick={() => handleDropdownSelect("houseHoldIncome", ['10-20K', '20-30K', '30-40K', '40-50K', '50-60K', '60-70K'])}  
                                className={styles.selectButton}>
                                    House Hold Income 
                                <span className={styles.icon}>{isOpen && selectedDropdown.name === "houseHoldIncome" ? <MdKeyboardArrowRight className={styles.arwIcon}/> :<MdKeyboardArrowDown className={styles.arwIcon}/>}</span>
                            </div>
                            <div 
                                onClick={() => handleDropdownSelect("profession", ['Banglore', 'Indore', 'Pune', 'Mumbai'])}  
                                className={styles.selectButton}>
                                    Profession 
                                <span className={styles.icon}>{isOpen && selectedDropdown.name === "profession" ? <MdKeyboardArrowRight className={styles.arwIcon}/> :<MdKeyboardArrowDown className={styles.arwIcon}/>}</span>
                            </div>
                            <div 
                                onClick={() => handleDropdownSelect("age", ['Banglore', 'Indore', 'Pune', 'Mumbai'])}  
                                className={styles.selectButton}>
                                    Age 
                                <span className={styles.icon}>{isOpen && selectedDropdown.name === "age" ? <MdKeyboardArrowRight className={styles.arwIcon}/> :<MdKeyboardArrowDown className={styles.arwIcon}/>}</span>
                            </div>
                            <div 
                                onClick={() => handleDropdownSelect("gender", ['Banglore', 'Indore', 'Pune', 'Mumbai'])}  
                                className={styles.selectButton}>
                                    Gender 
                                <span className={styles.icon}>{isOpen && selectedDropdown.name === "gender" ? <MdKeyboardArrowRight className={styles.arwIcon}/> :<MdKeyboardArrowDown className={styles.arwIcon}/>}</span>
                            </div>
                            <div 
                                onClick={() => handleDropdownSelect("interest", ['Banglore', 'Indore', 'Pune', 'Mumbai'])}  
                                className={styles.selectButton}>
                                    Interest 
                                <span className={styles.icon}>{isOpen && selectedDropdown.name === "interest" ? <MdKeyboardArrowRight className={styles.arwIcon}/> :<MdKeyboardArrowDown className={styles.arwIcon}/>}</span>
                            </div>
                        </div>
                    </div>
                    {isOpen && (
                        <div className={styles.dg_right}>
                            <Dgtemp name={selectedDropdown.name} options={selectedDropdown.options} />
                        </div>
                    )}
                </div>
                <div className={styles.continue_btn}>
                  <div><ContinueButton /></div>
                </div>
            </div>
            <div><Footer/></div>
            
        </div>
        </DropdownProvider>
    )
}

export default Step2;