import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';


function App() {
  return (
      <div style={{fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
          <Header/>
          <div style={{display: 'flex', justifyContent: 'center'}}>
             <UserProfile name="John Doe" age={30} bio="A Software Engineer"/>
          </div>
          <MainContent/>
          <Counter />
          <Footer/>
      </div>
  );
}

export default App;