import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Given the component footer', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(<Footer />);
      expect(screen.getByText(/© 2021 Eat the World/i)).toBeInTheDocument();
    });
  });
});
