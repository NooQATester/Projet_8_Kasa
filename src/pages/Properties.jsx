import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import Dropdowns from '../components/Dropdowns/Dropdown';
import styles from './Properties.module.css';
import Rating from '../components/Properties/components/Rating';
import Tags from '../components/Properties/components/Tags';
import Host from '../components/Properties/components/Host';
import Carousel from '../components/Properties/components/Carousel';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProperties = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/properties/${id}`);

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;

      if (!data || typeof data !== 'object') {
        navigate('/error');
        return;
      }

      setProperties(data);
    } catch (err) {
      navigate('/error');
    } finally {
      setLoading(false);
    }
  };

  fetchProperties();
}, [id, navigate]);

  if (loading) return <p>Chargement...</p>;
  if (!properties) return <p>Logement non trouvé.</p>;

  return (
    <>
    <Carousel pictures={properties.pictures} />
    
      <div className={styles.containerProperties}>
        <div className={styles.left}>
          <h1 className={styles.title}>{properties.title}</h1>
          <p className={styles.location}>{properties.location}</p>
          <Tags tags={properties.tags} />
        </div>
        <div className={styles.right}>
          <div className={styles.hostContainer}>
            <Host name={properties.host.name} picture={properties.host.picture}/>
          </div>
          <Rating rating={parseInt(properties.rating)} />
        </div>
      </div>

      <div className={`${styles.dropdownWrapper} ${styles.dropdownWrapperProperties}`}>
        <div className={styles.dropdownProperties}>
          <Dropdowns title="Description" content={properties.description} className="dropdown-logement"/>
        </div>
        <div className={styles.dropdownProperties}>
          <Dropdowns className="dropdown-logement" title="Équipements" content={
            <ul>
              {properties.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }/>
        </div>
      </div>
    </>
  );
};

export default Properties;

