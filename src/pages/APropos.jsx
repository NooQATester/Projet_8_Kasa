import Banner from '../components/Banner';
import imageBannerAPropos from '../assets/imageBannerAPropos.png';
import styles from '../components/Layout/Layout.module.css';

function APropos() {
  return (
    <div className={styles.layoutWrapper}>
      <Banner image={imageBannerAPropos} text=""/>
    </div>
  );
}

export default APropos;
