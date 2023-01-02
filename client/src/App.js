import React, { useState } from 'react';
import './App.css';
import Posts from './Components/Posts/Posts'
import FacebookLoginButton from './Components/FacebookLoginButton/FacebookLoginButton';


function App() {
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

      <Posts
        isLoggedIn={isLoggedIn}
        pages={pages}
        setPages={setPages}
      />

    </div>
  );
}

export default App;
