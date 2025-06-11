import styles from './Dropdowns.module.css';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

function Dropdowns({ title, content, className }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

  return ( 
    <div className={styles.dropdownWrapper}>
        <div className={`${styles.containerDropdowns} ${className}`} onClick={toggleDropdown}>
            <h4 className={styles.titleDropdowns}>{title}</h4>
            <img src={arrow} className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`} alt={isOpen ? "Icône flèche vers le haut" : "Icône flèche vers le bas"}></img>
        </div>
        
        {isOpen && (
            <div className={styles.dropdownContent}>
                <p className={styles.textDropdowns}>{content}</p>
            </div>
        )}
    </div>
  );
}

export default Dropdowns;