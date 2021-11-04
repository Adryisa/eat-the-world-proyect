import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ApiContextProvider } from 'contexts/ApiContext';
import Home from './Home';

describe('Given the component Home', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(
        <MemoryRouter>
          <ApiContextProvider>
            <Home />
          </ApiContextProvider>
        </MemoryRouter>
      );
      expect(
        screen.getByRole('heading', {
          name: /what do you want to eat today\?/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /categories/i })
      ).toBeInTheDocument();
    });
  });
});
