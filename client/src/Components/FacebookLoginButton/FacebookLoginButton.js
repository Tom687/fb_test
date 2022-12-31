import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FacebookLoginButton({ isLoggedIn = false, setIsLoggedIn }) {
  //const [isLoggedin, setIsLoggedin] = useState(false);

  /*const onLoginClick = () => {
    console.info('LOGIN CLICKED !');
    //window.FB.login(...);
    window.FB.getLoginStatus(function(response) {
      //statusChangeCallback(response);
      console.log(response);
      console.log(1)
      if (response.authResponse.accessToken) {
        console.log(2)
        setIsLoggedin(true);
      }
      else {
        console.log(3)
        setIsLoggedin(false);
      }
      console.log(4)
    });
    /!*window.FB.login(function(response) {
      console.log({response})
      if (response.authResponse) {
        setIsLoggedin(true);
        console.log('AUTH RES', response.authResponse);
      }
      else {
        setIsLoggedin(false);
        console.log('eeeeennnn');
      }
    });*!/
  };*/

  console.log({isLoggedIn})

  window.checkLoginState = () => {
    window.FB.getLoginStatus(async function(response) {
      //statusChangeCallback(response);
      console.log(response);
      if (response.status === 'connected' || response.authResponse) {
        const accessToken = response.authResponse.accessToken;
        const userId = response.authResponse.userID;
        setIsLoggedIn(true);

        try {
          const res = axios.post('http://localhost:1337/pages', {
            client_id: '1242384183292030',
            client_secret: 'e61a882707fe673a37d55a450486a68c',
            fb_exchange_token: accessToken,
            accessToken,
            url: 'https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token',
          }, {
            headers: {
              authorization: `Bearer ${accessToken}`
            }
          })

          console.log({res})
        }
        catch (err) {
          console.log('Err getPageToken :', err);
        }
      }
      else {
        setIsLoggedIn(false);
      }
    });
  };

  const onLogoutClick = async () => {
    await window.FB.logout(() => setIsLoggedIn(false));
    window.checkLoginState();
    window.location.reload();
  };




  // FIXME : Comment faire réapparaitre le bouton login quand on logout ?
  return (
    <div>
      {/*<button
       //className="fb-login-button" //data-width="300" data-size="large"
       onClick={onLoginClick}
       >
       Se connecter avec Facebook
       </button>*/}
      {/*<div
       className="fb-login-button" data-width="300" data-size="large" data-button-type="login_with"
       data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"
       onlogin={() => checkLoginState()}
       ></div>*/}
      {
        !isLoggedIn &&
        <div
          className="fb-login-button" data-width="300" data-size="large" data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          data-onlogin="checkLoginState();"
          data-scope="email,public_profile"
        />
      }
      {
        isLoggedIn && <button onClick={onLogoutClick}>Logout</button>
      }
      { isLoggedIn ? <h4>Connecté</h4> : <h4>Déconnecté</h4> }

    </div>
  );
};