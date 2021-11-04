import { Router } from 'react-router-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ApiContextProvider } from 'contexts/ApiContext';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from 'App';

describe('Given the component Home', () => {
  describe('when a term is searched', () => {
    test('then it should trigger path change', () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <ApiContextProvider>
            <App />
          </ApiContextProvider>
        </Router>
      );
      const input = screen.getByRole('textbox');
      userEvent.type(input, 'chicken');
      const form = document.querySelector('form');
      fireEvent.submit(form);
      expect(history.location.pathname).toBe('/recipes');
    });
    test('then it should show search term', () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <ApiContextProvider>
            <App />
          </ApiContextProvider>
        </Router>
      );
      const input = screen.getByRole('textbox');
      userEvent.type(input, 'chicken');
      const form = document.querySelector('form');
      fireEvent.submit(form);
      expect(
        screen.getByText(/search results for: chicken/i)
      ).toBeInTheDocument();
    });
  });
});
