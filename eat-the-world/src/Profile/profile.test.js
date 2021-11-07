import { MemoryRouter } from 'react-router-dom';
import { getDefaultNormalizer, render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import userEvent from '@testing-library/user-event';
import Profile from './Profile';

jest.mock('@auth0/auth0-react');

describe('Given the component categories', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      useAuth0.mockReturnValue({
        user: {
          email: 'johndoe@gmail.com',
          name: 'john doe',
          picture: '',
        },

        loginWithRedirect: jest.fn(),
        logout: jest.fn(),
        isAuthenticated: true,
      });

      render(
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      );
      expect(screen.getByText(/john doe/i)).toBeInTheDocument();
      userEvent.click(screen.getByRole('button'));
      const logout = useAuth0().logout;
      expect(logout).toHaveBeenCalled();
    });
  });
});
