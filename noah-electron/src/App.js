import logo from './logo.svg';
import './App.css';

function App() {
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
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </main>
    </div>
  );
}

export default App;
