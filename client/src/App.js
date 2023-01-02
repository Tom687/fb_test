import React, { useState } from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
//import FB from './Components/FacebookLoginButton/FB';
import FacebookLoginButton from './Components/FacebookLoginButton/FacebookLoginButton';

//import { initializeFacebookSdk } from './utils/initFacebookSdk';

function App() {
  //initializeFacebookSdk();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pages, setPages] = useState([]);

  return (
    <div className="App">
      <h1>Test FB</h1>
      <FacebookLoginButton
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        pages={pages}
        setPages={setPages}
      />
      {/*<FB />*/}
      <Posts
        isLoggedIn={isLoggedIn}
        pages={pages}
        setPages={setPages}
      />
    </div>
  );
}

export default App;
