import { useState, useEffect } from 'react';

export default function FacebookLoginButton3() {
  const FB = window.FB;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginClick = () => {
    const FB = window.FB;

    FB.login(function(response) {

      if (response.authResponse) {

        console.log('Welcome!  Fetching your information.... ');

        FB.api('/me', function(response) {

          console.log('Good to see you, ' + response.name + '.');
          console.log('Complete response from Facebook', response);

          FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
              let myaccesstoken = response.authResponse.accessToken;
              console.log('Access Token', myaccesstoken);
            }
          });
        });
      }
      else {
        console.log('User cancelled login or did not fully authorize.');
      }
      // mention all your permissions here
    }, { scope: 'public_profile,email' });

    /*window.FB.getLoginStatus(function(response) {
     //statusChangeCallback(response);
     console.log(response);
     });

     window.FB.login(function(response) {

     if (response.authResponse) {
     console.log('AUTH RES', response.authResponse);
     }
     else {
     console.log('eeeeennnn');
     }
     });*/
  };

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: `1242384183292030`,
        cookie: true,
        xfbml: true,
        version: 'v15.0',
      });

      window.FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src =
        'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
      <button onClick={onLoginClick}>Se connecter avec Facebook</button>
    </div>
  );

}