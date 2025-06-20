import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../components/Properties/components/Carousel';

test('change d’image quand on clique sur la flèche droite', () => {
  const pictures = [
    'https://example.com/photo1.jpg',
    'https://example.com/photo2.jpg'
  ];

  render(<Carousel pictures={pictures} />);

  // Vérifie que la première image est bien affichée
  expect(screen.getByAltText('Photo 1')).toBeInTheDocument();

  // Clique sur la flèche droite
  const rightArrow = screen.getByAltText('Flèche droite');
  fireEvent.click(rightArrow);

  // Vérifie que la deuxième image s’affiche
  expect(screen.getByAltText('Photo 2')).toBeInTheDocument();
});
