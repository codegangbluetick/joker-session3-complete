import React from 'react';
import logo from './logo.svg';
import JokeForm from './components/Form';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <JokeForm />
      </header>
    </div>
  );
}

export default App;
