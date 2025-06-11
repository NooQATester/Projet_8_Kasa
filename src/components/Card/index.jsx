import styles from './Card.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
      <div>
        <Link to={`/properties/${id}`} className={styles.cardLink}>
            <div className={styles.card}>
                <img src={cover} alt={`Illustration du logement ${title}`} className={styles.cardPicture} />
                <h4>{title}</h4>
            </div>
        </Link>
      </div>
  );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;