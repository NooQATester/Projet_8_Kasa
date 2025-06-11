import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
          <img src={logo} alt="Logo Kasa" className={styles.logoHeader} />
          <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
