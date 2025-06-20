import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/index';

test('affiche le logo avec le bon alt', () => {
  render(<Footer />);
  const logo = screen.getByAltText(/logo blanc Kasa/i);
  
  expect(logo).toBeInTheDocument();
});

test('affiche le texte de copyright', () => {
  render(<Footer />);
  const copyright =
    screen.getByText(/© 2020 Kasa\. All rights reserved/i);
  expect(copyright).toBeInTheDocument();
});
