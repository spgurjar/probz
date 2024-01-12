import styles from "./signUp.module.css";
import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoKeyOutline } from "react-icons/io5";

const SignIn = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSignUp = (e) => {
        //connect with your backend here
        console.log('loggin in with:', email, password);
    }

    const handleSignUpWithGoogle = () => {
        //implement Google sign_in logic here
        console.log('Signing in with Google');
      };

    return(
        <div className={styles.signUpcover}>

            <div className={styles.sidepart}>
                <div className={styles.hemis}><img className={styles.hemi_img} src="/images/hemis.png" /></div>
                <div className={styles.s_box}>
                <div className={styles.probz}>Probz</div>
                <div className={styles.content_box}>
                    <div className={styles.head}>Supercharge your Decision Making Process 🎉</div>
                    <div className={styles.subHead}>Instantly gather user feedback, access on-demand insights, and conduct real-time idea testing, empowering swift action based on user perception</div>
                    <div className={styles.img_box}><img className={styles.img} src="/images/signUp.png" /></div>
                    <div className={styles.icon1}>🤝</div>
                <div className={styles.icon2}>💯</div>
                </div>
                
                </div>
            </div>
            
            <div className={styles.signUpForm}>
                <div className={styles.signUpHead}>Sign Up</div>
                <div className={styles.signUpsubHead}>Join the community </div>
                <div className={styles.Gbtn}><img className={styles.gIcon} src="/images/gIcon.png" /><button className={styles.gbtn} onClick={handleSignUpWithGoogle}>Continue with Google</button></div>
                <div className={styles.Or}>Or</div>
                <div className={styles.cred_box}><TfiEmail className={styles.icon} /> <input className={styles.textArea} type="email" value={email} placeholder="Enter Address" onChange={handleEmailChange} /></div>
                <div className={styles.cred_box}><IoKeyOutline className={styles.icon} /><input className={styles.textArea} type="password" value={password} placeholder="Password" onChange={handlePasswordChange} /></div>
                <div className={styles.cont_btn} onClick={handleSignUp}>Continue</div>
                <div className={styles.register}>Don't have an account? <div className={styles.rbtn}>Register.</div> </div>
            </div>
        </div>
    
    )
}

export default SignIn;