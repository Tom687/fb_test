import { useState, useEffect } from 'react';

export default function FacebookLoginButton() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const onLoginClick = (e) => {
    console.info('LOGIN CLICKED !', e);
    //window.FB.login(...);
  };

  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId            : process.env.APP_ID,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v15.0'
      });
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
      <button
        onClick={onLoginClick}
      >
      Se connecter avec Facebook
      </button>
    </div>
  );
};