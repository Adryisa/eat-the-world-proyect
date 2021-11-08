import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ApiContextProvider } from 'contexts/ApiContext';
import { createMemoryHistory } from 'history';
import useApiState from 'hooks/useApiState';
import DetailsPage from './DetailsPage';

jest.mock('hooks/useApiState');
window.scrollTo = jest.fn();

describe('Given the component categories', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', async () => {
      const history = createMemoryHistory();
      history.push('/details/1111');
      useApiState.mockImplementation(() => {
        return {
          displayRecipeDetails: jest.fn().mockResolvedValue({
            recipeId: 1111,
            name: 'chicken wings',
            country: '',
            instructions: 'fry',
            category: '',
            picture: '',
            isFavorite: false,
            ingredients: [],
          }),
        };
      });
      render(
        <Router history={history}>
          <ApiContextProvider>
            <DetailsPage />
          </ApiContextProvider>
        </Router>
      );
      expect(await screen.findByText(/chicken wings/i)).toBeInTheDocument();
    });
  });
});
