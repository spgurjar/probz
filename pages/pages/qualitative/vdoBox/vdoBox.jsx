"use client";
import { useState, useRef } from 'react';
import 'swiper/css';
import styles from './vdoBox.module.css';
import VdoTemp from './vdoTemp/vdoTemp';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const VdoBox = (props) => {

  const address = [
    { src1: '/images/vdoSrc.mp4', src2: '/images/vdoSrc.mp4', src3: '/images/vdoSrc.mp4', src4: '/images/vdoSrc.mp4', src5: '/images/vdoSrc.mp4', src6: '/images/vdoSrc.mp4', src7: '/images/vdoSrc.mp4', src8: '/images/vdoSrc.mp4', src9: '/images/vdoSrc.mp4', },
    { src1: '/images/vdoSrc.mp4', src2: '/images/vdoSrc.mp4', src3: '/images/vdoSrc.mp4', src4: '/images/vdoSrc.mp4', src5: '/images/vdoSrc.mp4', src6: '/images/vdoSrc.mp4', src7: '/images/vdoSrc.mp4', src8: '/images/vdoSrc.mp4', src9: '/images/vdoSrc.mp4', },
    { src1: '/images/vdoSrc.mp4', src2: '/images/vdoSrc.mp4', src3: '/images/vdoSrc.mp4', src4: '/images/vdoSrc.mp4', src5: '/images/vdoSrc.mp4', src6: '/images/vdoSrc.mp4', src7: '/images/vdoSrc.mp4', src8: '/images/vdoSrc.mp4', src9: '/images/vdoSrc.mp4', },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const handleVideoClick = (videoSrc) => {
     setSelectedVideo(videoSrc);
     setModalVisible(true);
  };

  const closeModal = () => {
     setModalVisible(false);
  };

  const [activeSlide, setActiveSlide] = useState(0);

 // Function to go to the next slide
 const goToNextSlide = () => {
    setActiveSlide((prevActiveSlide) => {
      // Check if the next slide is within the bounds of the address array
      if (prevActiveSlide < address.length - 1) {
        return prevActiveSlide + 1;
      } else {
        // If we're at the last slide, go back to the first slide
        return 0;
      }
    });
 };

 // Function to go to the previous slide
 const goToPreviousSlide = () => {
    setActiveSlide((prevActiveSlide) => {
      // Check if the previous slide is within the bounds of the address array
      if (prevActiveSlide > 0) {
        return prevActiveSlide - 1;
      } else {
        // If we're at the first slide, go to the last slide
        return address.length - 1;
      }
    });
 };

  return (
    <div className={styles.vdobox_body}>
      <div className={styles.vb_head_box}>
        <div className={styles.head}>
          <p><span className={styles.videoNumber}>{props.videoNumber}</span>{props.que}</p>
        </div>
        <div className={styles.vdo_count}>{props.vdoCount}</div>
      </div>
      <div className={styles.carousel_container}>
        <Carousel
          showStatus={false}
          swipeable
          emulateTouch
          selectedItem={activeSlide}
        >
          {address.map((address, index) => (
        <div key={index}>
          <div className={styles.container} >
            <div className={styles.vdo_holder}>
              <div><VdoTemp source={address.src1} caption="Details video of your answer with examples and questions" handleVideoClick={handleVideoClick}/></div>
              <div><VdoTemp source={address.src2} caption="Details video of your answer with examples and questions" handleVideoClick={handleVideoClick}/></div>
              <div><VdoTemp source={address.src3} caption="Details video of your answer with examples and questions" handleVideoClick={handleVideoClick}/></div>
            </div>

            <div className={styles.vdo_holder}>
              <div><VdoTemp source={address.src4} caption="Details video of your answer with examples and questions" handleVideoClick={handleVideoClick}/></div>
              <div><VdoTemp source={address.src5} caption="Details video of your answer with examples and questions" handleVideoClick={handleVideoClick}/></div>
              <div><VdoTemp source={address.src6} caption="Details video of your answer with examples and questions" handleVideoClick={handleVideoClick}/></div>
            </div>

            <div className={styles.vdo_holder}>
              <div><VdoTemp source={address.src7} caption="Details video of your answer with examples and questions" handleVideoClick={handleVideoClick}/></div>
              <div><VdoTemp source={address.src8} caption="Details video of your answer with examples and questions" handleVideoClick={handleVideoClick}/></div>
              <div><VdoTemp source={address.src9} caption="Details video of your answer with examples and questions" handleVideoClick={handleVideoClick}/></div>
            </div>
          </div>
          <div className={styles.btn_box}>
            <div className={styles.btn} onClick={goToNextSlide}>Next</div>
          <div className={styles.btn} onClick={goToPreviousSlide}>Previous</div>
        </div>
         </div>
         
       ))}
        </Carousel>
      </div>
      {/* Modal to display the selected video */}
      {modalVisible && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <video className={styles.fullscreenVideo} autoPlay loop muted>
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
 );
};

export default VdoBox;

