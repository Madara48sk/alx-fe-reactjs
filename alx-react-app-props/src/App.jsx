import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserContext from './UserContext'; // Import UserContext

function App() {
  const [count, setCount] = useState(0);
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" }; // Dummy user data

  return (
    <UserContext.Provider value={userData}> {/* Wrap the app with UserContext.Provider */}
    <div className="App">
      <Header />
      <main>
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
          <WelcomeMessage />
          <MainContent />
          
          <div className='logo-container'>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
      </main>
      
      <Footer />
    </div>
        </UserContext.Provider>
  );
}

export default App;