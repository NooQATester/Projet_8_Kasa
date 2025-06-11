import styles from './Tags.module.css';

const Tags = ({ tags }) => {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
