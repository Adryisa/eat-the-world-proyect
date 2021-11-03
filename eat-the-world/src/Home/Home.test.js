import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Given the component Home', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      expect(screen.getByLabelText('Search:')).toBeInTheDocument();
      expect(screen.getByText(/Hero Search/)).toBeInTheDocument();
    });
  });
});
