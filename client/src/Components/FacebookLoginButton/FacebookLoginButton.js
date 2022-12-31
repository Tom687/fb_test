import { useState, useEffect } from 'react';

export default function FacebookLoginButton({ /*isLoggedIn = false, setIsLoggedIn*/ }) {
  //const [isLoggedin, setIsLoggedin] = useState(false);

  const onLoginClick = () => {
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
    /*window.FB.login(function(response) {
      console.log({response})
      if (response.authResponse) {
        setIsLoggedin(true);
        console.log('AUTH RES', response.authResponse);
      }
      else {
        setIsLoggedin(false);
        console.log('eeeeennnn');
      }
    });*/
  };

  console.log({isLoggedin})

  window.checkLoginState = () => {
    window.FB.getLoginStatus(function(response) {
      //statusChangeCallback(response);
      console.log(response);
      if (response.authResponse) {
        setIsLoggedin(true);
      }
      else {
        setIsLoggedin(false);
      }
    });
  };

  const onLogoutClick = async () => {
    await window.FB.logout(() => setIsLoggedin(false));
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
        !isLoggedin &&
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
        isLoggedin && <button onClick={onLogoutClick}>Logout</button>
      }
      { isLoggedin ? <h4>Connecté</h4> : <h4>Déconnecté</h4> }

    </div>
  );
};