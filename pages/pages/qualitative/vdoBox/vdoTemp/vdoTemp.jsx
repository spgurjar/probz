import React from 'react';
import styles from "./vdoTemp.module.css";

const VdoTemp = ({ source, caption, handleVideoClick  }) => {
 return (
    <div className={styles.content} onClick={() => handleVideoClick(source)}>
      <div>
        <video className={styles.vdo} width={275} height={155} controls>
          <source src={source} type="video/mp4" />
        </video>
      </div>
      <div className={styles.caption}>{caption}</div>
    </div>
 );
};

export default VdoTemp;


// import styles from "./vdoTemp.module.css";

// const VdoTemp = (props) => {
//     return(
//         <div className={styles.content}>
//             <div >
//                 <video className={styles.vdo} width={275} height={155} controls>
//                   <source src={props.source} type="video/mp4"/>
//                 </video>
//             </div>
//             <div className={styles.caption}>{props.caption}</div>
//         </div>
//     )
// }

// export default VdoTemp;

