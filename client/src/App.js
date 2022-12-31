import React from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
import FacebookLoginButton from './Components/FacebookLoginButton/FacebookLoginButton';

//import { initializeFacebookSdk } from './utils/initFacebookSdk';

function App() {
  //initializeFacebookSdk();

  return (
    <div className="App">
      <h1>Test FB</h1>
      <FacebookLoginButton />
      <Posts />
    </div>
  );
}

export default App;
