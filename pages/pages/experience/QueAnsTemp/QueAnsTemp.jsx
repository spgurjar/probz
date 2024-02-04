import styles from "./QueAnsTemp.module.css";

const QueAnsTemp = (props) => {
    return(
        <div className={styles.qa_body}>
            <span className={styles.question}>{props.question}</span>
            <span className={styles.answer}>{props.answer}</span>
        </div>
    )
}
export default QueAnsTemp;