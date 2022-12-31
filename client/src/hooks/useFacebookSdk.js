import { useState, useEffect, useCallback } from 'react';

const FB = window.FB;

const initializeFacebookSdk = () => {
  new Promise((resolve, reject) => {
    const FB = window.FB;
    if (typeof FB !== 'undefined') {
      resolve();
    }
    else {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: `1242384183292030`,
          cookie: true,
          xfbml: true,
          version: 'v15.0',
        });

        FB.AppEvents.logPageView();
        resolve();
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
    }
  });
}

const useFacebookSdk = () => {
  const [fb, setFB] = useState([]);
  const [isReady, setReady] = useState(false);

  const initFacebook = useCallback(async () => {
    await initializeFacebookSdk();
    // eslint-disable-next-line no-undef
    if (typeof FB !== 'undefined') {
      // eslint-disable-next-line no-undef
      setFB(FB);
      setReady(true);
    }
  });

  useEffect(() => {
    initFacebook();
  }, [initFacebook]);

  return [fb, isReady];
};

export default useFacebookSdk;