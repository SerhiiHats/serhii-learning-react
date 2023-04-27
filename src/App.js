import logo from './logo.svg';
import './App.css';
import WelcomeSimple from './components/WelcomeSimple/WelcomeSimple';
import Clock from './components/Clock/Clock';


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
          (new doc.) Learn React
        </a>
        <a
          className="App-link"
          href="https://ru.legacy.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          (old doc.) Learn React
        </a>
      </header>

      <main>
        <div className="main-container">
          <div className='lesson2'>
            <div className='left-card'>component: WelcomeSimple</div>
            <div className='right-card'>
              <WelcomeSimple firstName="Serhii" />
              <WelcomeSimple />
            </div>
          </div>
          <div className='lesson2'>
            <div className='left-card'>
              <p>component: Clock</p>
              <p>-color from Array</p>
              <p>-color from Random</p>
            </div>
            <div className='right-card'>
              <Clock />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
