import styles from './Host.module.css';

const Host = ({ name, picture }) => {
  return (
    <div className={styles.host}>
      <div className={styles.name}>{name}</div>
      <img className={styles.picture} src={picture} alt={`Portrait de ${name}`} />
    </div>
  );
};

export default Host;
