import Banner from '../components/Banner';
import imageBannerAccueil from '../assets/imageBannerAccueil.png';

function Home() {
  return (
    <>
      <Banner image={imageBannerAccueil} text="Chez vous, partout et ailleurs" withShadow={true} />
    </>
  );
}

export default Home;
