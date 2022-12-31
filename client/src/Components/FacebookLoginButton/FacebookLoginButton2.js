import { useState, useEffect, useCallback } from 'react';

export default function FacebookLoginButton2() {
  const FB = window.FB;

  async function fbLogin() {
    await FB.init({
      appId: `${process.env.APP_ID}`,
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