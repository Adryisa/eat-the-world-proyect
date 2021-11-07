import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ApiContextProvider } from 'contexts/ApiContext';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import ListPage from './ListPage';
import useApiState from 'hooks/useApiState';

jest.mock('hooks/useApiState');

describe('Given the component ListPage', () => {
  describe('when the component is instantiated', () => {
    test('then it should show the serch term and list', () => {
      const history = createMemoryHistory();
      history.push('/recipes');

      useApiState.mockImplementation(() => {
        return {
          list: [
            {
              recipeId: 1,
              name: 'Beef Meal',
              country: 'American',
              picture: '',
              isFavorite: false,
            },
          ],
          searchTerm: 'beef',
        };
      });

      render(
        <Router history={history}>
          <ApiContextProvider>
            <ListPage />
          </ApiContextProvider>
        </Router>
      );

      expect(screen.getByText(/beef meal/i)).toBeInTheDocument();
      expect(screen.getAllByRole('link')).toHaveLength(1);
    });
  });
});
