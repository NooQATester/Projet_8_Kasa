import styles from './Footer.module.css';
import logoBlanc from '../../assets/logoBlanc.png';

function Footer() {
  return ( 
    <div className={styles.containerFooter}>
      <img src={logoBlanc} alt="logo blanc Kasa" className={styles.logoFooter} />
      <p className={styles.textFooter}>
        © 2020 Kasa. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
