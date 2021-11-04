import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ApiContextProvider } from 'contexts/ApiContext';
import ListRecipe from './ListRecipe';

describe('Given the component ListRecipe', () => {
  describe('when component is instantiated', () => {
    test('then it should render a list', () => {
      const mockList = [
        {
          recipeId: 111,
          name: 'Chicken',
          country: '',
          instructions: '',
          category: '',
          picture: '',
          tags: '',
          ingredients: [],
        },
        {
          recipeId: 222,
          name: 'Beef',
          country: '',
          instructions: '',
          category: '',
          picture: '',
          tags: '',
          ingredients: [],
        },
      ];
      render(
        <MemoryRouter>
          <ApiContextProvider>
            <ListRecipe list={mockList} />
          </ApiContextProvider>
        </MemoryRouter>
      );

      expect(screen.getAllByRole('listitem')).toHaveLength(2);
      expect(
        screen.getByRole('heading', { name: /beef/i })
      ).toBeInTheDocument();
    });
  });
});
