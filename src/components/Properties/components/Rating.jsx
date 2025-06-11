import styles from './Rating.module.css';

const Rating = ({ rating }) => {
  const maxRating = 5;

  return (
    <div className={styles.rating}>
      {[...Array(maxRating)].map((_, index) => (
        <i
          key={index}
          className={`fa-star ${index < rating ? 'fa-solid ' + styles.filled : 'fa-regular ' + styles.empty}`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;
