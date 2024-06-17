import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import Page from './components/page.js';

// This line is needed to properly initialize react-modal
Modal.setAppElement('#root');

function App() {
  return (
    <div className="App font-kanit">
      <Page />
    </div>
  );
}

export default App;