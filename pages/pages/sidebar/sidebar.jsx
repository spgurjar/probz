import styles from "./sidebar.module.css";
import SbTemp from "./sidebarTemp/sidebarTemp";
import Link from 'next/link';

const Sidebar = () => {
    return(
        <div className={styles.sb_body}>
            <div className={styles.sb_items}>
                <Link href="/experience"><div><SbTemp text="Nike Jordans Experience"/></div></Link>
                <Link href="/qualitative"><div><SbTemp text="Qualitative Analytics"/></div></Link>
                <div><SbTemp text="Quantitive Analytics"/></div>
                <div><SbTemp text="Sentiment  Analytics"/></div>
                <div><SbTemp text="Recommendation"/></div>
                <div><SbTemp text="Reports"/></div>
            </div>
            {/* Responsiv component */}
            <div className={styles.sb_resItems}>
                <Link href="/experience"><div><SbTemp text="Nike Jordans Experience"/></div></Link>
                <Link href="/qualitative"><div><SbTemp text="Qualitative Analytics"/></div></Link>
                <div><SbTemp text="Quantitive Analytics"/></div>
                <div><SbTemp text="Sentiment  Analytics"/></div>
                <div><SbTemp text="Recommendation"/></div>
                <div><SbTemp text="Reports"/></div>   
            </div>
        </div>
    )
}

export default Sidebar;