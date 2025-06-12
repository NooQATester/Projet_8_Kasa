import styles from './Footer.module.css';
import logo from '../../assets/logoKasa.svg';


function Footer() {
  return ( 
    <div className={styles.containerFooter}>
      <img src={logo} alt="logo blanc Kasa" className={styles.logoFooter} />
      <p className={styles.textFooter}>
        © 2020 Kasa. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
