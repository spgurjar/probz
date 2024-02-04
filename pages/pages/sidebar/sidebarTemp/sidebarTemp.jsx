import styles from "./sidebarTemp.module.css";

const SbTemp = (props) => {
    return(
        <>  
            <div className={styles.sb_content}>
                <span className={styles.sb_text}>{props.text}</span>
            </div>
        </>
    );
};

export default SbTemp;