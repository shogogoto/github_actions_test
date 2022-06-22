import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContentApi from "./api/ContentApi"


function App() {
  const message = ContentApi.get();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit2 <code>src/App.tsx</code> and save to reload {message}.
        </p>
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
      </header>
    </div>
  );
}

export default App;
