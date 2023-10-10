import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import About from './components/About';

function App() {
  return (
    <div className="bg-gradient-to-r from-[#222222] via-[#444444] to-[#222222] min-h-screen flex items-center justify-center">
      {/* Your page content goes here */}
      <NavBar />
      <LandingPage />
      {/*<About className="mt-screen" />*/}
    </div>
  );
}

export default App;