import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import userEvent from '@testing-library/user-event';

jest.mock('@auth0/auth0-react');

describe('Given the component categories', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      useAuth0.mockReturnValue({
        loginWithRedirect: jest.fn(),
      });
      const loginWithRedirect = useAuth0().loginWithRedirect;

      render(
        <MemoryRouter>
          <LoginButton />
        </MemoryRouter>
      );

      userEvent.click(screen.getByRole('button'));
      expect(loginWithRedirect).toHaveBeenCalled();
    });
  });
});
