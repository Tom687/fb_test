import useFacebookSdk from '../../hooks/useFacebookSdk';

export default function FB2() {
  const [FBInstance, isReady] = useFacebookSdk();

  console.log(FBInstance)
  console.log(isReady)

  const onLoginClick = () => {
    const FB = window.FB;

    window.FB.login(function(response) {

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
  }

  return (
    <button onClick={onLoginClick} disabled={!isReady}>Se connecter via FB (FB2)</button>
  );
}