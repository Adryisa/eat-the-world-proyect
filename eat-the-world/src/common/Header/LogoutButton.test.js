import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import userEvent from '@testing-library/user-event';
import LogoutButton from './LogoutButton';

jest.mock('@auth0/auth0-react');

describe('Given the component categories', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      useAuth0.mockReturnValue({
        logout: jest.fn(),
      });
      const logout = useAuth0().logout;

      render(
        <MemoryRouter>
          <LogoutButton />
        </MemoryRouter>
      );

      userEvent.click(screen.getByRole('button'));
      expect(logout).toHaveBeenCalled();
    });
  });
});
