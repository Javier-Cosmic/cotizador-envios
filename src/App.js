import React from 'react';
import './assets/css/styles.css';
import GlobalState from './components/context/GlobalState';
import Header from './components/layout/Header';
import Home from './components/layout/Home';

function App() {
  return (
    <GlobalState>
      <Header />
      <Home />
    </GlobalState>
  );
}

export default App;
