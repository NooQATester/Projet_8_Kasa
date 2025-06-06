import { NavLink } from 'react-router-dom';
import styles from './Error.module.css';

function Error() {
  return (
    <>
      <div className={styles.textError}>
        <h1>404</h1>
        <p>Oups! La page que<span className={styles.lineBreak}>{" "}</span> vous demandez n’existe pas.</p>
        <NavLink to="/" className={styles.linkReturnHome}>
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </>
  )
}

export default Error