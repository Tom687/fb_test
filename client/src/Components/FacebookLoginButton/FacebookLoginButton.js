import { useState, useEffect } from 'react';

export default function FacebookLoginButton() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  /*const onLoginClick = () => {
   console.info('LOGIN CLICKED !');
   //window.FB.login(...);
   window.FB.getLoginStatus(function(response) {
   //statusChangeCallback(response);
   console.log(response);
   });
   window.FB.login(function(response) {

   if (response.authResponse) {
   console.log('AUTH RES', response.authResponse);
   }
   else {
   console.log('eeeeennnn')
   }
   })
   };*/

  /*useEffect(() => {
   window.fbAsyncInit = function() {
   window.FB.init({
   appId: '1242384183292030',
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
   }, []);*/

  /*useEffect(() => {
   window.FB.getLoginStatus(function(response) {
   //statusChangeCallback(response);
   console.log(response);
   });
   });*/

  window.checkLoginState = () => {
    window.FB.getLoginStatus(function(response) {
      //statusChangeCallback(response);
      console.log(response);
    });
  };

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
      <div
        className="fb-login-button" data-width="300" data-size="large" data-button-type="continue_with"
        data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"
        data-onlogin="checkLoginState();"
      ></div>
    </div>
  );
};