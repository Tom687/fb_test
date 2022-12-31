import useFacebookSdk2 from '../../hooks/useFacebookSdk2';
import { useState } from 'react';

export default function FB() {
  const [facebook, isFacebookReady] = useFacebookSdk2();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isFacebookReady)

  const handleFacebookLogin = async () => {
    console.log(facebook);
    const response = await facebook.login()

    if (response !== undefined) {
      setIsLoggedIn(true);
      setStatus('connected');
    }
    else {
      setIsLoggedIn(false);
      setStatus('disconnected');
    }
  }

  const handleLogout = async () => {
    const { authResponse, status } = await facebook.logout();
    if (authResponse === null || status === 'unknown') {
      setIsLoggedIn(false);
      setStatus('disconnected');
    }
    else {
      setIsLoggedIn(status === 'unknown' ? false : true);
      setStatus('connected');
    }
  };

  const [status, setStatus] = useState('disconnected');

  const checkStatus = async () => {
    const status = await facebook.getLoginStatus();
    setStatus(status === 'unknown' ? 'disconnected' : status);
    setIsLoggedIn(status === 'unknown' ? false : true);
  }

  return (
    <div>
      {
        isLoggedIn ?
          <button onClick={handleLogout} disabled={!isFacebookReady}>Logout with Facebook</button> :
          <button type='button' onClick={handleFacebookLogin} disabled={!isFacebookReady}>Login with Facebook</button>
      }
      <div>
        <h4>Status : { status }</h4>
        <button onClick={checkStatus}>Status : { status }</button>
      </div>
    </div>
  )
}