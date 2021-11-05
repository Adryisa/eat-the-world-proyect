import { useAuth0 } from '@auth0/auth0-react';
import './Profile.scss';

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <section className="profile">
      {isAuthenticated ? (
        <>
          <img src={user.picture} alt={user.name} />
          <h2 className="profile__name">{user.name}</h2>
          <p>{user.email}</p>
          <button
            className="profile__btn"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log out
          </button>
        </>
      ) : (
        <>
          <p className="profile__not-logged">
            You are not logged in. Please log in and try again.
          </p>
          <button className="profile__btn" onClick={() => loginWithRedirect()}>
            Log in
          </button>
        </>
      )}
    </section>
  );
};

export default Profile;
