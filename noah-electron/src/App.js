import React, { useState } from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';

// This line is needed to properly initialize react-modal
Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <header className="bg-blue-500 text-white text-3xl p-4">
        Tailwind CSS Integration
      </header>
      <main className="p-4">
        <p className="mb-4 text-lg">
          If you see this page styled with a blue header, some text, and a button below, Tailwind CSS is working correctly in your project.
        </p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setModalIsOpen(true)}
        >
          Click Me
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="m-4 bg-white p-5 rounded shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p>React-Modal is working with Tailwind!</p>
          <button
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </Modal>
      </main>
    </div>
  );
}

export default App;