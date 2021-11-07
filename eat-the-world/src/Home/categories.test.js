import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ApiContextProvider } from 'contexts/ApiContext';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import Categories from './Categories';
import useApiState from 'hooks/useApiState';

jest.mock('hooks/useApiState');

describe('Given the component categories', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      const history = createMemoryHistory();
      useApiState.mockImplementation(() => {
        return {
          countries: [
            {
              country: 'American',
              image: '',
            },
          ],
          displayRecipeListCountry: jest.fn(() => {
            history.push('/recipes');
          }),
        };
      });

      render(
        <Router history={history}>
          <ApiContextProvider>
            <Categories />
          </ApiContextProvider>
        </Router>
      );

      expect(screen.getAllByText(/American/i)).toBeTruthy();
      userEvent.click(screen.queryAllByRole('button')[0]);
      expect(history.location.pathname).toBe('/recipes');
    });

    // test('then it should be rendered', () => {
    //   const history = createMemoryHistory();
    //   useApiState.mockImplementation(() => {
    //     return {
    //       countries: [
    //         {
    //           country: 'American',
    //           image: '',
    //         },
    //       ],
    //       displayRecipeListCountry: jest.fn(() => {
    //         history.push('/recipes');
    //       }),
    //     };
    //   });

    //   render(
    //     <Router history={history}>
    //       <ApiContextProvider>
    //         <Categories />
    //       </ApiContextProvider>
    //     </Router>
    //   );
    //   expect(screen.getAllByText(/American/i)).toBeTruthy();
    //   userEvent.click(screen.queryAllByRole('button')[0]);
    //   expect(history.location.pathname).toBe('/recipes');
    // });
  });
});
