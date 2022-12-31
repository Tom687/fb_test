import React from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
import FB from './Components/FacebookLoginButton/FB';
import FacebookLoginButton from './Components/FacebookLoginButton/FacebookLoginButton';
import FacebookLoginButton2 from './Components/FacebookLoginButton/FacebookLoginButton2';
import FacebookLoginButton3 from './Components/FacebookLoginButton/FacebookLoginButton3';

//import { initializeFacebookSdk } from './utils/initFacebookSdk';

function App() {
  //initializeFacebookSdk();

  return (
    <div className="App">
      <h1>Test FB</h1>
      <FacebookLoginButton />
      <FacebookLoginButton2 />
      <FacebookLoginButton3 />
      <FB />
      <Posts />
    </div>
  );
}

export default App;
