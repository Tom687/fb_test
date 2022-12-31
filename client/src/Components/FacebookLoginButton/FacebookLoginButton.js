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
        data-scope="email,public_profile"
      ></div>
    </div>
  );
};