import Banner from '../components/Banner';
import imageBannerAccueil from '../assets/imageBannerAccueil.png';
import Gallery from '../components/Gallery';

function Home() {

  return (
    <>
      <Banner image={imageBannerAccueil} text="Chez vous, partout et ailleurs" withShadow={true} />
      <Gallery />
    </>
  );
}

export default Home;
