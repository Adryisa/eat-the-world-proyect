import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ApiContextProvider } from 'contexts/ApiContext';
import { useAuth0 } from '@auth0/auth0-react';

import useUserState from 'hooks/useUserState';
import ButtonStar from './ButtonStar';

jest.mock('hooks/useUserState');
jest.mock('@auth0/auth0-react');
window.scrollTo = jest.fn();

describe('Given the component categories', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      useAuth0.mockImplementation(() => {
        return {
          isAuthenticated: true,
        };
      });

      useUserState.mockImplementation(() => {
        return {
          deleteOneRecipe: jest.fn(),
          deleteOneRecipeNoDispatch: jest.fn(),
          addOneRecipeNoDispatch: jest.fn(),
        };
      });
      const mockItem = {
        recipeId: 1111,
        name: 'chicken wings',
        country: '',
        instructions: 'fry',
        category: '',
        picture: '',
        isFavorite: true,
        ingredients: [],
      };
      render(
        <MemoryRouter>
          <ApiContextProvider>
            <ButtonStar item={mockItem} className="" />
          </ApiContextProvider>
        </MemoryRouter>
      );
      expect(screen.getByAltText('favorite star icon')).toBeInTheDocument();
    });
  });
});
