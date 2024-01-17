// import styles from "./tm.module.css";

// const Testimonial = () => {
//     return(
//         <div className={styles.tm_body}>
//             <div className={styles.box1}>
//                 <div className={styles.img_box}>
//                     <div className={styles.bgImg}><img className={styles.bg} src="/images/testBg.png"/></div>
//                     <div className={styles.Img}><img className={styles.prPic} src="/images/prPic.png"/></div>
//                 </div>
//                 <div className={styles.title}>Testimonials</div>
//                 <div className={styles.subtitle}>Customer who loved Probz</div>
//             </div>
//             <div className={styles.box2}>
//                 <div className={styles.name}>Carla James</div>
//                 <div className={styles.location}>Bangalore,India</div>
//                 <div className={styles.comment}>Probz streamlined our research remarkably. The AI-generated hypotheses provided insightful directions, and the customizable surveys were a game-changer in our new product launch</div>
//             </div>
//         </div>
//     )
// }

// export default Testimonial;


"use client";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './tm.module.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { inherits } from 'util';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const testimonials = [
    { name: 'Carla James', location: 'Bangalore,India', comment: 'Probz streamlined our research remarkably. The AI-generated hypotheses provided insightful directions, and the customizable surveys were a game-changer in our new product launch', bgImage: '/images/testBg.png', prPic: '/images/prPic.png' },
    { name: 'Carla James2', location: 'Bangalore,India', comment: 'Probz streamlined our research remarkably. The AI-generated hypotheses provided insightful directions, and the customizable surveys were a game-changer in our new product launch', bgImage: '/images/testBg.png', prPic: '/images/prPic2.png' },
    { name: 'Carla James3', location: 'Bangalore,India', comment: 'Probz streamlined our research remarkably. The AI-generated hypotheses provided insightful directions, and the customizable surveys were a game-changer in our new product launch', bgImage: '/images/testBg.png', prPic: '/images/prPic3.png' },
  ];

    useEffect(() => {
        setImageSrc(testimonials[currentIndex].prPic);
        console.log(currentIndex);
    }, [currentIndex]); 

  return (
    <div className={styles.tm_body}>
        <div className={styles.box1}>
            <div className={styles.img_box}>
                <div className={styles.bgImg}><img className={styles.bg} src="/images/testBg.png"/></div>
                <div className={`${styles.Img} ${isFlipping ? styles.flipping : ''}`}>
                  <img
                    className={styles.prPic}
                    src={imageSrc}
                    alt="Profile"
                    onAnimationEnd={() => {
                      if (isFlipping) {
                        setImageSrc(testimonials[currentIndex].prPic);
                      }
                    }}
                  />
                </div>
            </div>
            <div className={styles.title}>Testimonials</div>
            <div className={styles.subtitle}>Customer who loved Probz</div>
        </div>
    
      <div className={styles.carousel_container}>  
      <Carousel
       showStatus={false}
       swipeable
       emulateTouch
       onChange ={(index) => {
        setIsFlipping(true);
        setTimeout(() => {
          setCurrentIndex(index);
          setIsFlipping(false);
        }, 800);
      }}
     >
       {testimonials.map((testimonial, index) => (
         <div key={index}>
           <div className={styles.box2} >
             <div className={styles.name}>{testimonial.name}</div>
             <div className={styles.location}>{testimonial.location}</div>
             <div className={styles.comment}>{testimonial.comment}</div>
           </div>
         </div>
       ))}
    </Carousel>
    </div>   
    
    </div>

  );
};

export default Testimonial;



