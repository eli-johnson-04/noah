import React, { useState } from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar';

// This line is needed to properly initialize react-modal
Modal.setAppElement('#root');

function App() {
  return (
    <div className="App font-kanit">
      <NavBar />
      <span className="text-[#434141] ">No tutorial category selected! Choose an option above. </span>
    </div>
  );
}

export default App;