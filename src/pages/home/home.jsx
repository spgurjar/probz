import styles from "./home.module.css";
import Offer from "../assets/offer/offer";
import Footer from "../assets/footer/footer";
import Header from "./homeComps/header/header";
import About from "./homeComps/about/about";
import Demo from "./homeComps/demo/demo";
import Working from "./homeComps/working/working";
import Testimonial from "./homeComps/testimonial/tm";
import Faq from "./homeComps/faq/faq";
const Home = () => {
    return(
        <div className={styles.home_body}>
            <div><Offer/></div>
            <div><Header/></div>
            <div><About/></div>
            <div><Demo/></div>
            <div><Working/></div>
            <div><Testimonial/></div>
            <div><Faq/></div>
            <div><Footer/></div>

        </div>
    )
}
export default Home;