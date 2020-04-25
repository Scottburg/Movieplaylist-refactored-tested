import React from 'react';
import SpotifyLogin from './react-spotify-login/src/SpotifyLogin';
import './logins.css';

function Logins({ token, setTokenSpotify }) {
  const onSuccessSpotify = (response) => setTokenSpotify(response.access_token);
  const onFailureSpotify = (response) => console.error(response);

  const loginAgain = () => {
    return setTokenSpotify();
  };

  return (
    <div className="Logins">
      {!token && (
        <SpotifyLogin
          clientId={process.env.REACT_APP_SPOTIFY_ID}
          redirectUri="http://localhost:3000/"
          onSuccess={onSuccessSpotify}
          onFailure={onFailureSpotify}
        />
      )}

      {token && (
        <button className="loginButton" onClick={loginAgain}>
          Logout
        </button>
      )}
      {token && (
        <p>
          Spotify logged in{' '}
          <span role="img" aria-label="rock">
            🤘
          </span>
        </p>
      )}
    </div>
  );
}

export default Logins;
