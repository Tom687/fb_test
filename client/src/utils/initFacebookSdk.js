/*
export function initializeFacebookSdk() {

  /!* Asynchronous flow: if the global 'FB' variable is still undefined,
   then the facebook script hasn't loaded yet, in that case, provide
   a global callback that will be called by the facebook code. If the
   variable is already present, just call the code right away and forget
   about the callback. *!/
  if(window.FB === undefined) {
    console.log('FB undefined -> provide callback');
    window.fbAsyncInit = function() {
      initialize();
    };
  }
  else {
    console.log('FB defined -> call init right away');
    initialize();
  }

  function initialize() {
    window.FB.init({
      appId      : `${process.env.APP_ID}`,
      cookie     : true,
      xfbml      : true,
      version    : 'v15.0'
    });
  }
}*/
