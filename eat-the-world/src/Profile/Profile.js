import { useAuth0 } from '@auth0/auth0-react';
import './Profile.scss';

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);
  return (
    isAuthenticated && (
      <section className="profile">
        <img src={user.picture} alt={user.name} />
        <h2 className="profile__name">{user.name}</h2>
        <p>{user.email}</p>
        <button
          className="profile__logout-btn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      </section>
    )
  );
};

export default Profile;
