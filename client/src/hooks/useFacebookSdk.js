import { useState, useEffect, useCallback } from 'react';

const initialzeFacebookSdk = () => {
  new Promise((resolve, reject) => {
    if (typeof FB !== 'undefined') {
      resolve();
    }
    else {
      window.fbAsyncInit = function() {
        FB.init({
          appId: `${process.env.APP_ID}`,
          cookie: true,
          xfbml: true,
          version: 'v15.0',
        });

        FB.AppEvents.logPageView();
        resolve();
      };

      (function(d, s, id) {
        let js;
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        // eslint-disable-next-line prefer-const
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  });
}

const useFacebookSdk = () => {
  const [fb, setFB] = useState([]);
  const [isReady, setReady] = useState(false);

  const initFacebook = useCallback(async () => {
    await initializeFb();
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

  return [fb, isReady];const []
};

export default useFacebookSdk;