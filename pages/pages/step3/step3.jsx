import React, { useState, useContext } from 'react';
import styles from './step3.module.css';
import { GoLightBulb } from "react-icons/go";
import { CgAddR } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Offer from "../assets/offer/offer";
import Header from "../assets/header/header";
import Footer from "../assets/footer/footer";
import { motion } from 'framer-motion';
import Link from 'next/link';


const Step3 = () => {
    const [questions, setQuestions] = useState([{id: 1, text: ''}]);

    const addQuestion = () => {
        // const newId = Math.max(...questions.map(q => q.id)) + 1;
        // setQuestions([...questions, {id: newId, text: ''}]);
        if (questions.length < 12) {
            const newId = Math.max(...questions.map(q => q.id)) + 1;
            setQuestions([...questions, {id: newId, text: ''}]);
          } else {
            alert('You have reached the maximum number of questions');
          }
         
       };
       
       const deleteQuestion = (id) => {
        setQuestions(questions.filter(q => q.id !== id));
       };
       
       const editQuestion = (id, text) => {
        setQuestions(questions.map(q => q.id === id ? {...q, text} : q));
       };

       
       
    return(
        <div className={styles.step1_body}>
            <div><Offer/></div>
            <div><Header/></div>
            <div className={styles.head_box}>
                <div className={styles.header}>
                    <div className={styles.title}></div>
                    <div className={styles.step_box}>
                    <Link href="/step1"><div className={styles.step}>Step 1</div></Link>
                    <Link href="/step2"><div className={styles.step}>Step 2</div></Link>
                    <Link href="/step3"><div className={styles.step}>Step 3</div></Link>
                    </div>
                </div>
                <div className={styles.note_box}>
                    <div><GoLightBulb className={styles.bulb} /></div>
                    <p className={styles.note}>Input top 3-4 aspects you would like to gain insights on Our AI tool will generate the Hypothesis you are looking to test</p>
                </div>
                <div className={styles.h_box}>
                    <div className={styles.colmTitle}>enter top 3 aspect you want to understand</div>
                    <div onClick={addQuestion} className={styles.addbtn_box}>
                        <div> <CgAddR className={styles.add_icon}/></div>
                        <div className={styles.add_btn}>Add More Questions?</div>
                    </div>
                </div>
                {/* <div className={styles.question_box}>
                    <div className={styles.qbox_head}>
                        <div className={styles.que_num}>Question 1</div>
                        <div className={styles.qbtn_box}>
                            <div className={styles.edit}><FiEdit className={styles.edit_icon}/> </div>
                            <div className={styles.delete}> <AiOutlineDelete className={styles.dlt_icon}/></div>
                        </div>
                    </div>   
                    <textarea className={styles.question}></textarea>
                </div>  */}
                {questions.map((q, i) => (
                    <motion.div
                    key={q.id}
                    className={styles.question_box}
                    initial={{ y:  -300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    >
                        <div className={styles.qbox_head}>
                          <div className={styles.que_num}>{`Question ${i+1}`}</div>
                          <div className={styles.qbtn_box}>
                            <button onClick={() => editQuestion(q.id)} className={styles.edit}>
                              <FiEdit className={styles.edit_icon}/>
                            </button>
                            <button onClick={() => deleteQuestion(q.id)} className={styles.delete}>
                              <AiOutlineDelete className={styles.dlt_icon}/>
                            </button>
                          </div>
                        </div>
                        <textarea placeholder='Type Your Question...' value={q.text} onChange={e => editQuestion(q.id, e.target.value)} className={styles.question}></textarea>
                    </motion.div>
               ))}
            </div>    
            
            <div className={styles.btn_box}>
                <div onClick={() => console.log(questions)} className={styles.continue_btn}>
                    <div className={styles.icon}><img className={styles.pIcon} src="/icons/pIcon.png" /></div>
                    <Link href="/experience"><div className={styles.text}>Genarate survey Questions</div></Link>
               </div>
                    <Link href="/step2"><div className={styles.back}>Back</div></Link>
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Step3;