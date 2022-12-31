import React, { useState } from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
import FB from './Components/FacebookLoginButton/FB';
import FB2 from './Components/FacebookLoginButton/FB2';
import FacebookLoginButton from './Components/FacebookLoginButton/FacebookLoginButton';
//import FacebookLoginButton2 from './Components/FacebookLoginButton/FacebookLoginButton2';
//import FacebookLoginButton3 from './Components/FacebookLoginButton/FacebookLoginButton3';

//import { initializeFacebookSdk } from './utils/initFacebookSdk';

function App() {
  //initializeFacebookSdk();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log({isLoggedIn})
  return (
    <div className="App">
      <h1>Test FB</h1>
      <FacebookLoginButton
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {/*<FacebookLoginButton2 />
      <FacebookLoginButton3 />*/}
      <FB />
      <FB2 />
      <Posts
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default App;
