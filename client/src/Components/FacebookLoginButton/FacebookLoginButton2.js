import { useState, useEffect, useCallback } from 'react';

export default function FacebookLoginButton2() {
  const FB = window.FB;

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: `${process.env.APP_ID}`,
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

  async function fbLogin() {
    const FB = window.FB;

    await FB.init({
      appId: `1242384183292030`,
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v15.0',
    });

    FB.login(function (response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
          console.log('Good to see you, ' + response.name + '.');
          console.log('Complete response from Facebook', response)
          FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
              let myaccesstoken = response.authResponse.accessToken
              console.log('Access Token', myaccesstoken)
            }
          });
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
      // mention all your permissions here
    }, { scope: 'public_profile,email' });
  }

  return (
    <button onClick={() => fbLogin()}>FB Login</button>
  );
}