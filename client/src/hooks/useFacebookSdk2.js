import { useEffect, useState } from 'react';

const _extends = Object.assign || function(target) {
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i];
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

const useFacebookSdk2 = function() {
  const FB = window.FB;
  //const appId = process.env.APP_ID;
  const [isReady, setIsReady] = useState(false);

  const facebook = {
    login: async () => {
      const { authResponse, status } = await new Promise(resolve => window.FB.login(resolve, { scope: 'public_profile,email' }));

      if (!authResponse) {
        return { status };
      }

      return new Promise(resolve => window.FB.api('/me', { locale: 'fr_FR', fields: 'name,public_profile,read_insights' }, me => {
        _extends(me, authResponse);
        resolve(me);
      }));
    },

    logout: async () => {
      return new Promise(resolve => window.FB.logout(res => {
        console.log({res})
        resolve({ authResponse: res.authResponse, status: res.status });
      }));
    },

    getLoginStatus: async () => {
      return new Promise(resolve => window.FB.getLoginStatus(res => {
        console.log(res)
        resolve(res.status);
      }));
    }
  };

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: `1242384183292030`,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v15.0',
      });
      setIsReady(true);
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

  return [facebook, isReady];
};

export default useFacebookSdk2;