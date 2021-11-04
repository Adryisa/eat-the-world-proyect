import { fireEvent, render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Given the component footer', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(
        <Router>
          <Sidebar />
        </Router>
      );
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getAllByAltText('login')).toHaveLength(3);
      expect(screen.getByText(/home/i)).toBeInTheDocument();
      expect(screen.getByText(/profile/i)).toBeInTheDocument();
      expect(screen.getByText(/favorites/i)).toBeInTheDocument();
    });
  });
});
