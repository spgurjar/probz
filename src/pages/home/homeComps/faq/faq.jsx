import styles from "./faq.module.css";
import FaqComp from "./faqComp/faqComp";
 
const faqData = [
    { question: 'Is there a free trial for Speedy?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'Can I use Speedy for multiple businesses?', answer: 'You can install React using npm or yarn.' },
    { question: 'Does Google rank AI content??', answer: 'You can install React using npm or yarn.' },
  ];

 const Faq = () => {
    return(
        <div className={styles.faq_body}>
            <div className={styles.head_box}>
                <div className={styles.bg}>Faq</div>
                <div className={styles.text1}>Frequently <span className={styles.space}>Asked</span> Questions</div>
                <div className={styles.text2}>FAQ</div>
            </div>
            <div className={styles.faq_box}>
                <div className={styles.queAns}>
                    <FaqComp data={faqData}/>
                </div>
                <div className={styles.blue_box}>
                    <div className={styles.img}><img className={styles.bulb} src="/images/bulb.png" /></div>
                    <div className={styles.text}>“With the help of Probz we have increased our web presence through blogs with amazing quality. Their annual content strategy has freed up hours for my employees and </div>
                </div>
            </div>
        </div>
        
    )
 }

 export default Faq;