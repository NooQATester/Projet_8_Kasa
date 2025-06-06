import { useEffect, useState } from "react";
import Card from '../Card';
import styles from './Gallery.module.css';
import callApi from '../../services/callApi';

function Gallery() {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        callApi.getAllProperties()
            .then((res) => {
                setProperties(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des propriétés :", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className={styles.galleryLoading}>Chargement...</div>;
    }

    return (
        <div className={styles.containerGallery}>
            {properties.map((dataAllProperties) => (
                <Card
                    key={dataAllProperties.id}
                    id={dataAllProperties.id}
                    title={dataAllProperties.title}
                    cover={dataAllProperties.pictures?.[0]}
                />
            ))}
        </div>
    );
};


export default Gallery;