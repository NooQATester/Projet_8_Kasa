import { useState } from "react";
import styles from "./Carousel.module.css";
import arrow from '../../../assets/arrow.svg';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <img
        className={styles.image}
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
      />

      {pictures.length > 1 && (
        <>
        <img src={arrow} className={`${styles.arrow} ${styles.arrowLeft}`} onClick={goToPrevious} alt="Flèche gauche"/>
        <img src={arrow} className={`${styles.arrow} ${styles.arrowRight}`} onClick={goToNext} alt="Flèche droite"/>

          <div className={styles.counter}>
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
