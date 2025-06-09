import styles from './Banner.module.css';

function Banner({ image, text, withShadow = false }) {
  return (
    <div className={`${styles.bannerAccueil} ${withShadow ? styles.withShadow : ''}`}>
      <img src={image} alt="Bannière représentant un paysage" className={styles.imageBanner} />
      {text && <h1 className={styles.textBannerAccueil}>{text}</h1>}
    </div>
  );
}

export default Banner;
